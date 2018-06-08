/**
 * Created by easterCat on 2018/6/8.
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Input extends React.Component {

    constructor() {
        super();
        this.onChange = (e) => {
            let {getInputChangeValue} = this.props;
            getInputChangeValue && getInputChangeValue(e);
        }
    }

    render() {
        let {type, name, className, value, defaultValue, placeholder} = this.props;

        let inputClass = classnames({
            'layui-input': true,
        }, className);

        let props = {
            type: type,
            ref: (input) => {
                this.input = input
            },
            name: name,
            autoComplete: "off",
            placeholder: placeholder,
            className: inputClass,
            onChange: this.onChange
        };

        if (defaultValue && (!value || value === '')) {
            Object.assign(props, {
                defaultValue: defaultValue,
            });
        }

        if (value && value !== '') {
            Object.assign(props, {
                value: value,
            });
        }

        return (
            <input {...props}/>
        )
    }
}

Input.defaultProps = {
    type: 'text',
    defaultValue: '',
    value: '',
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string
};

export default Input;