/**
 * Created by easterCat on 2018/6/8.
 */

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Card extends React.Component {

    render() {

        let {header, content} = this.props;

        return (
            <div className="layui-card">
                <div className="layui-card-header">
                    {header}
                </div>
                <div className="layui-card-body">
                    {content}
                </div>
            </div>
        )
    }

}

export default Card;
