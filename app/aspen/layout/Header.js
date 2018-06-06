/**
 * Created by easterCat on 2018/6/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Header(props) {
    return (
        <div className="mo-header">
            {props.children}
        </div>
    )
}

export default Header;