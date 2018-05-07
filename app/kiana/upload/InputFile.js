/**
 * Created by easterCat on 2018/3/14.
 */

import React from 'react';
import PropTypes from 'prop-types';

class InputFile extends React.Component {
    constructor(props) {
        super(props);
    }

    click() {
        if (this.locked) return;
        this.locked = true;

        this.input.value = '';
        this.input.click();

        setTimeout(() => {
            this.locked = false;
        }, 200)
    }

    render() {
        return (
            <input type="file"
                   ref={(el) => {
                       this.input = el
                   }}
                   multiple={this.props.multiple}
                   accept={this.props.accept}
                   style={{
                       position: 'absolute',
                       left: 0,
                       top: 0,
                       width: 0,
                       height: 0,
                       opacity: 0
                   }}
                   onChange={this.props.onChange}
            />
        )
    }
}

InputFile.propTypes = {
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
};

InputFile.defaultProps = {
    multiple: false,
};

export default InputFile;