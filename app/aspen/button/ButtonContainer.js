/**
 * Created by fuhuo on 2018/5/5.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ButtonContainer(props) {
    let {children, className, ...others} = props;

    className = classNames({
        [className]: !!className,
        "layui-btn-container": true
    });

    return (
        <div className={className} {...others}>
            {children}
        </div>
    )
}

ButtonContainer.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
};