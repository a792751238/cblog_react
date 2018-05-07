/**
 * Created by fuhuo on 2018/5/5.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ButtonGroup(props) {
    let {children, className, ...others} = props;

    className = classNames({
        [className]: !!className,
        "layui-btn-group": true
    });

    return (
        <div className={className} {...others}>
            {children}
        </div>
    )
}

ButtonGroup.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
};