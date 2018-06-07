/**
 * Created by easterCat on 2018/6/6.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Footer(props) {
    return (
        <div className="mo-footer">
            {props.children}
        </div>
    )
}

export default Footer;