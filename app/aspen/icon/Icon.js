/**
 * Created by fuhuo on 2018/5/5.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './icon.scss';
import './fontello/css/kiana.css';

export default function Icon(props) {
    let {style, size, icon, className, spin} = props;

    className = classNames({
        [className]: !!className,
        "layui-icon": true,
        [`kiana-icon-${icon}`]: true,
        "icon-spin": spin
    });

    if (size) {
        size += 'px';
        size = {
            fontSize: size,
            width: size,
            height: size
        }
    }

    style = Object.assign({}, size || {}, style);

    return (
        <i style={style} className={className}>
            {props.children}
        </i>
    )

}

Icon.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    spin: PropTypes.bool
};

Icon.defaultProps = {
    size: 14,
    spin: false
};