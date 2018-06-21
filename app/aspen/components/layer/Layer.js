/**
 * Created by easterCat on 2018/6/21.
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button/Button';

class Layer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                visibility: props.visible ? 'visible' : 'hidden',
                zIndex: 19891020,
                width: `${props.width}px`
            }
        };
        this.confirmEvent = this.confirmEvent.bind(this);
        this.cancelEvent = this.cancelEvent.bind(this)
    }

    confirmEvent() {
        this.props.confirmEvent && this.props.confirmEvent();
    }

    cancelEvent() {
        this.props.cancelEvent && this.props.cancelEvent();
    }

    getTheElementLocStyle() {
        let {location, width} = this.props;
        let style = {...this.state.style};

        if (this.layer) {
            let layerHeight = this.layer.clientHeight;
            let documentWidth = document.documentElement.clientWidth || document.body.clientWidth;
            let documentHeight = document.documentElement.clientHeight || document.body.clientHeight;

            if (location === 'top') {
                style = Object.assign(style, {
                    top: '0px',
                    left: `${(documentWidth - width) / 2}px`,
                })
            }
            if (location === 'center') {
                style = Object.assign(style, {
                    top: `${(documentHeight - layerHeight) / 2}px`,
                    left: `${(documentWidth - width) / 2}px`,
                })
            }

            this.setState({
                style
            })
        }
    }

    componentDidMount() {
        this.getTheElementLocStyle();
        window.addEventListener('resize', () => {
            this.getTheElementLocStyle();
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
            let style = {...this.state.style};
            this.setState({
                style: Object.assign(style, {
                    visibility: nextProps.visible ? 'visible' : 'hidden',
                })
            })
        }
    }

    render() {
        let {children, title} = this.props;
        let {style} = this.state;

        return (
            <div className="layui-layer layui-layer-page" ref={(layer) => {
                this.layer = layer
            }} style={style}>
                <div className="layui-layer-title">
                    {title}
                </div>
                <div className="layui-layer-content">
                    <div style={{
                        padding: '20px'
                    }}>
                        {children}
                    </div>
                </div>
                <span className="layui-layer-setwin">
                    <a onClick={this.cancelEvent} className="layui-layer-ico layui-layer-close layui-layer-close1"/>
                </span>
                <div className="layui-layer-btn layui-layer-btn-c">
                    <Button onClick={this.cancelEvent}>关闭</Button>
                </div>
            </div>
        )
    }
}

Layer.defaultProps = {
    title: 'Layer',
    visible: false,
    width: 600
};

export default Layer;