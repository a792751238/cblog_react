/**
 * Created by easterCat on 2018/6/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Content(props) {
    return (
        <div className="mo-content">
            <div className="mo-main">
                {props.children}
            </div>
        </div>
    )
}

export default Content;