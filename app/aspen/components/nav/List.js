/**
 * Created by easterCat on 2018/6/7.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            domNode: null,
        };

        this.setDomNode = this.setDomNode.bind(this);
        this.selectId = this.selectId.bind(this);
        this.renderDropDown = this.renderDropDown.bind(this);
    }

    selectId(id) {
        this.props.selectActiveId && this.props.selectActiveId(id);
    }

    setDomNode(domNode) {
        this.setState({
            domNode: domNode
        })
    }

    renderDropDown() {
        let {dropDown, hoverId, id} = this.props;

        let dropClass = classNames({
            'layui-nav-child layui-anim layui-anim-upbit': true,
            'layui-show': hoverId === id
        });

        if (dropDown && Object.prototype.toString.call(dropDown) === '[object Array]') {
            return (
                <dl className={dropClass}>
                    {
                        dropDown.map((item, index) => {
                            return <dd key={`${item.text}-${index}`}
                                       onClick={item && typeof item.onClick === 'function' && item.onClick}>
                                <a>{item ? item.text : ''}</a>
                            </dd>
                        })
                    }
                </dl>
            )
        } else {
            return null
        }
    }

    render() {
        let {children, activeId, id, hoverId, onMouseEnter, onMountLeave, ...others} = this.props;
        let {domNode} = this.state;

        let listClass = classNames({
            'layui-nav-item': true,
            'layui-this': activeId === id
        });

        let moreClass = classNames({
            'layui-nav-more': true,
            'layui-nav-mored': hoverId === id,
        });

        let barStyle = {
            top: '55px',
            opacity: 0
        };

        if (domNode) {
            Object.assign(barStyle, {
                width: `${domNode.clientWidth}px`,
                top: `55px`,
                opacity: 100
            })
        }

        return (
            <li className={listClass}
                ref={(li) => {
                    this.curLi = li
                }}
                onMouseEnter={() => {
                    onMouseEnter(id);
                    this.setDomNode(this.curLi)
                }}
                onMouseLeave={() => {
                    onMountLeave(null);
                    this.setDomNode(null)
                }}
                onClick={() => {
                    this.selectId(id)
                }}>
                {children}
                <span className={moreClass}>

                </span>
                {this.renderDropDown()}
                <span className="layui-nav-bar" style={barStyle}>

                </span>
            </li>
        )
    }
}

List.defaultProps = {};

List.propTypes = {};

export default List;