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
        this.clickToSelectActiveId = this.clickToSelectActiveId.bind(this);
        this.renderDropDown = this.renderDropDown.bind(this);
    }

    clickToSelectActiveId(id) {
        this.props.selectActiveId && this.props.selectActiveId(id);
    }

    setDomNode(domNode) {
        this.setState({
            domNode: domNode
        })
    }

    renderDropDown() {
        let {dropDown, type, hoverId, id} = this.props;

        let dropClass = classNames({
            'layui-nav-child ': true,
            'layui-anim-upbit': type === 'default',
            'layui-anim': type === 'default',
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
        let {children, activeId, type, id, hoverId, onMouseEnter, onMountLeave, ...others} = this.props;
        let {domNode} = this.state;

        let listClass = classNames({
            'layui-nav-item': true,
            'layui-this': type === 'default' && activeId === id,
            'layui-nav-itemed': type === 'tree' && activeId === id
        });

        let moreClass = classNames({
            'layui-nav-more': true,
            'layui-nav-mored': type === 'default' && hoverId === id,
        });

        let barStyle = {
            opacity: 0
        };

        let liProps = {};

        if (domNode && type === 'default') {
            Object.assign(barStyle, {
                width: `${domNode.clientWidth}px`,
                top: `55px`,
                opacity: 100
            });


        }

        if (domNode && type === 'tree') {
            // Object.assign(barStyle, {
            //     height: `45px`,
            //     top: `${domNode.offsetTop}px`,
            //     opacity: 100
            // });
        }

        if (type === 'default') {
            liProps = Object.assign(liProps, {
                className: listClass,
                ref: (li) => {
                    this.curLi = li
                },
                onMouseEnter: () => {
                    onMouseEnter(id);
                    this.setDomNode(this.curLi)
                },
                onMouseLeave: () => {
                    onMountLeave(null);
                    this.setDomNode(null)
                },
                onClick: () => {
                    this.clickToSelectActiveId(id)
                }
            })
        }

        if (type === 'tree') {
            liProps = Object.assign(liProps, {
                className: listClass,
                ref: (li) => {
                    this.curLi = li
                },
                onClick: () => {
                    this.setDomNode(this.curLi);
                    this.clickToSelectActiveId(id);
                }
            })
        }

        return (
            <li {...liProps}>
                <a>
                    {children}
                    <span className={moreClass}>

                    </span>
                </a>
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