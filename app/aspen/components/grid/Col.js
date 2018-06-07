/**
 * Created by easterCat on 2018/6/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Col(props) {

    const {offset, className, children, ...others} = props;

    let colSizeClass = {};

    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(item => {
        let sizeValue = others[item];

        if (typeof sizeValue === 'number') {
            colSizeClass = {
                ...colSizeClass,
                [`layui-col-${item}${sizeValue}`]: item !== 0
            }
        }

        delete others[item];
    });

    let colClassName = classNames({
        [`layui-col-md-offset${offset}`]: offset && typeof offset === 'number' && offset !== 0,
    }, className, colSizeClass);

    return (
        <div className={colClassName} {...others}>
            {
                children
            }
        </div>
    )
}

Col.propTypes = {
    offset: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number,
};

export default Col;