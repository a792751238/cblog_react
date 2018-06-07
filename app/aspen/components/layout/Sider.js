/**
 * Created by easterCat on 2018/6/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Sider(props) {
    return (
        <div className="mo-sider">
            {props.children}
        </div>
    )
}

export default Sider;