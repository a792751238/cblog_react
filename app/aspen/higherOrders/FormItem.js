/**
 * Created by easterCat on 2018/4/13.
 */
import React, {createElement} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import curry from 'curry'
import {shallowEqual} from '../utils/objects'
import * as Validation from '../utils/validation'
// import Popover from '../Tooltip/FormItemPopover'
// import _inputs from '../styles/_input.scss'

export const COMPONENTS = {}

export default function FormItem(Component) {
    class FormItem extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                result: undefined,
                value: props.value !== undefined ? props.value : props.defaultValue
            }

            this.handleChange = this.handleChange.bind(this)
            this.validate = this.validate.bind(this)
            this.setResult = this.setResult.bind(this)
            this.bindElement = this.bindElement.bind(this)
        }

        componentWillMount() {
            const {name, value, defaultValue, dispatch, disabled, ignore} = this.props
            const {itemBind} = this.context

            if (itemBind && name) {
                itemBind({
                    name,
                    dispatch,
                    value: value || defaultValue,
                    disabled: disabled || ignore,
                    validate: this.validate
                })
            }
        }

        componentDidMount() {
            const {validator} = this.props
            const value = this.getValue()
            if (validator && validator.async && value !== undefined) {
                this.validate()
            }
        }

        componentWillReceiveProps(nextProps, nextContext) {
            const {itemChange} = this.context
            if (this.props.value !== nextProps.value) {
                itemChange && nextProps.name
                    ? itemChange(nextProps.name, nextProps.value)
                    : this._setState({value: nextProps.value})
            }
        }

        shouldComponentUpdate(nextProps, nextState, nextContext) {
            if (!shallowEqual(nextProps, this.props) || !shallowEqual(this.state, nextState)) {
                return true
            }

            if (shallowEqual(this.context, nextContext)) return false
            if (!shallowEqual(this.context.errors, nextContext.errors)) return true
            if (!shallowEqual(this.context.controlProps, nextContext.controlProps)) return true

            const {formData} = nextContext
            const {name} = nextProps
            return !shallowEqual(formData[name], this.context.formData[name])
        }

        componentWillUnmount() {
            this._isUnmounted = true
            const {name, onValidate} = this.props
            const {itemUnbind} = this.context
            itemUnbind && itemUnbind(name)

            // remove FormControl validation status.layui
            onValidate && onValidate(name, true)
        }

        bindElement(el) {
            this.inputElement = el
        }

        _setState(state) {
            if (!this._isUnmounted) {
                this.setState(state)
            }
        }

        setResult(result) {
            const {name, onValidate} = this.props
            this._setState({result})
            onValidate && onValidate(name, result)
        }

        validate(value, useState) {
            if (useState && this.state.result !== undefined) {
                return this.state.result
            }

            value = value || this.getValue()
            const {formData} = this.context
            const {type} = this.props

            let validate

            // component's inner validate
            if (Component.isFormBlock) {
                if (this.inputElement) validate = this.inputElement.validate.bind(this.inputElement)
            } else {
                validate = getValidate(type)
            }

            const result = validate ? validate(value, this.props, formData)
                : Validation.validate(value, getValueType(type), formData, this.props, this.setResult)

            this.setResult(result)

            return result
        }

        getValue() {
            const {name, type} = this.props
            const {formData} = this.context

            if (!name || !formData) return this.state.value

            const comp = COMPONENTS[type]
            if (comp && comp.allowEmpty) return formData[name]

            return formData[name] !== undefined ? formData[name] : this.state.value
        }

        handleChange(value) {
            const {itemChange} = this.context
            const {name, onChange, beforeChange} = this.props

            if (typeof value === 'object' && value.nativeEvent) {
                value = value.target.value
            }

            this._timeout && clearTimeout(this._timeout)

            if (value instanceof Error) {
                this.setResult(value)
            } else {
                this._timeout = setTimeout(() => {
                    this.validate(value)
                }, 400)

                if (beforeChange) value = beforeChange(value)
                // if in a form, use formData, else use state
                itemChange && name ? itemChange(name, value) : this._setState({value})

                // arguments handle
                let args = Array.prototype.slice.call(arguments)
                args[0] = value
                onChange && onChange(...args)
            }
        }

        render() {
            let {name, readOnly, ...props} = this.props
            const {controlProps, errors} = this.context
            const {result} = this.state

            let value = this.getValue()

            let hasError = this.state.result instanceof Error
            if (!hasError && errors && name) {
                hasError = !!errors[name]
            }

            let className = classnames(
                this.props.className,
                hasError && _inputs.dangerInput
            )

            if (controlProps && controlProps.disabled) readOnly = true

            // remove defaultValue,  use controlled value
            delete props['defaultValue']

            let backElement = (
                <Component {...props}
                           ref={this.bindElement}
                           name={name}
                           hasError={hasError}
                           onChange={this.handleChange}
                           value={value}
                           readOnly={readOnly}
                           className={className}
                />
            )


            return backElement
            // if (popover) {
            //     return (
            //         <Popover position={popover}
            //                  test={'danger'}
            //                  content={result instanceof Error ? result.message : undefined}>
            //             {el}
            //         </Popover>
            //     )
            // } else {
            //
            // }
        }
    }

    return FormItem
}

FormItem.register = curry((types, options, component) => {
    let newComponent = FormItem(component)

    // allow empty test
    // if (isEmpty(types)) {
    //  console.warn('types must be string or array');
    //  return;
    // }

    if (!Array.isArray(types)) {
        types = [types]
    }

    types.forEach((type) => {
        if (COMPONENTS.hasOwnProperty(type)) {
            console.warn(`type ${type} was already existed.`)
            return
        }

        let {valueType, render, validate, allowEmpty} = options
        if (!valueType) {
            valueType = ['integer', 'number'].indexOf(type) > -1 ? 'number' : 'string'
        }

        if (!render) {
            render = (props) => createElement(newComponent, props)
        }

        COMPONENTS[type] = {render, valueType, component, validate, allowEmpty}
    })

    return newComponent
})

export const getValueType = (type) => {
    let valueType = 'string'
    if (COMPONENTS[type]) {
        valueType = COMPONENTS[type].valueType
    }
    return valueType
}

export const getValidate = (type) => {
    if (COMPONENTS[type]) return COMPONENTS[type].validate
}