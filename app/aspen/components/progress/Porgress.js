/**
 * Created by easterCat on 2018/6/7.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Progress(props) {

    let {percent, style, color, showText, size, className, ...others} = props;

    let processStyle = {
        width: `${percent}%`
    };

    let newStyle = Object.assign({}, style, processStyle);

    let progressClass = classNames({
        'layui-progress': true,
        [`layui-progress-big`]: size && typeof size === 'string' && size === 'big'
    }, className);

    let innerProgressClass = classNames({
        'layui-progress-bar': true,
        [`layui-bg-${color}`]: color && typeof color === 'string',
    });


    return (
        <div className={progressClass}>
            <div className={innerProgressClass} style={newStyle}>
                {
                    showText ?
                        <span className="layui-progress-text">{`${percent}%`}</span> :
                        null
                }
            </div>
        </div>
    )
}

Progress.defaultProps = {
    percent: 0,
    showText: false,
};

Progress.propTypes = {
    percent: PropTypes.number,
    style: PropTypes.object,
    color: PropTypes.string,   //red,orange,green,blue,cyan
    size: PropTypes.string, //big,small
    showText: PropTypes.bool,
};

export default Progress;
