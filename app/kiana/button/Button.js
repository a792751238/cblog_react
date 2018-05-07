/**
 * Created by easterCat on 2018/5/4.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let {onClick} = this.props;
        onClick && onClick();
    }

    render() {
        let {children, type, size, shape, className, ...others} = this.props;
        let element;

        className = classNames({
            [className]: !!className,
            "layui-btn": true,
            [`layui-btn-${type}`]: type !== 'default',
            [`layui-btn-${size}`]: size !== 'md',
            "layui-btn-radius": shape === 'circle'
        });

        others.onClick = this.handleClick;

        if (others.href) {
            element = (
                <a className={className} {...others}>
                    <span>
                        {children}
                    </span>
                </a>
            )
        } else {
            element = (
                <button className={className} {...others}>
                    <span>
                        {children}
                    </span>
                </button>
            )
        }

        return element;
    }
}

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    once: PropTypes.bool,
    size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
    style: PropTypes.object,
    tag: PropTypes.string,
    throttle: PropTypes.number,
    type: PropTypes.oneOf(['primary', 'normal', 'default', 'warning', 'danger', 'disabled']),
    shape: PropTypes.oneOf(['', 'circle']),
};

Button.defaultProps = {
    type: 'default',
    size: 'md',
    tag: 'button',
    shape: '',
};