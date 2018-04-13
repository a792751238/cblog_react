/**
 * Created by easterCat on 2018/3/14.
 */
import React, {Component} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {getGrid} from '../utils/grids'
import {compose} from '../utils/compose'
import {substitute} from '../utils/strings'
import FormItem from '../higherOrders/FormItem'
import Upload from './Upload'
import {ERROR} from './status'
import InputFile from './InputFile'

// import _styles from '../styles/_upload.scss'

class FileUpload extends Component {
    constructor(props) {
        super(props)
        this.addFile = this.addFile.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
    }

    addFile() {
        this.input.click()
    }

    handleFileChange(e) {
        this.props.onFileAdd(e.target)
    }

    renderValues() {
        const {value, textTpl, removeValue} = this.props
        return value.map((v, i) => (
            <li key={i}>
                <span>{substitute(textTpl, v)}</span>
                <a
                    onClick={() => removeValue(i)}>
                    &times;
                </a>
            </li>
        ))
    }

    renderFiles() {
        const {files, removeFile} = this.props

        return Object.keys(files).map(k => {
            const file = files[k]
            return (
                <li key={k} style={{backgroundSize: `${file.process}% 2px`}} id={`up_pr_${k}`}>
                    <span>{file.status === ERROR ? file.message : file.name}</span>
                    <a
                        onClick={() => removeFile(k)}>
                        &times;
                    </a>
                </li>
            )
        })
    }

    render() {
        const {accept, grid, limit, multiple, style, children, content, disabled, readOnly, value, files} = this.props

        // let allowAdd = !disabled && !readOnly && (value.length + Object.keys(files).length) < limit

        let allowAdd = true

        return (
            <div style={{
                width: '100px',
                height: '100px',
                background: 'red'
            }}>
                {
                    allowAdd && <div onClick={this.addFile}>
                        {this.props.children}
                        {children || content}
                        <InputFile ref={(input) => {
                            this.input = input
                        }} multiple={multiple} accept={accept} onChange={this.handleFileChange}/>
                    </div>
                }
                <ul ref={(ul) => {
                    this.ul = ul
                }}>
                    { this.renderValues() }
                    { this.renderFiles() }
                </ul>
            </div>
        )
    }
}


FileUpload.defaultProps = {
    textTpl: '{name}'
}

export default compose(
    FormItem.register('upload', {valueType: 'array'}),
    Upload
)(FileUpload)