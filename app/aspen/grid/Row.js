/**
 * Created by easterCat on 2018/6/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Row(props) {
    let {space, className, children, ...others} = props;

    let rowClassName = classNames({
        'layui-row': true,
        [`layui-col-space${space}`]: space && typeof space === 'number' && space !== 0
    }, className);

    return (
        <div className={rowClassName} {...others}>
            {children}
        </div>
    )
}

Row.propTypes = {
    space: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Row;