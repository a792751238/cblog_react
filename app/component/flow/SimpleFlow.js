/**
 * Created by easterCat on 2017/10/31.
 */

import React from 'react';
import jp from '../../plugins/jsplumb/jsplumb';
import {flow} from './flow.common';
import './demo.css';
import {connect} from 'react-redux';
import {addOneList} from './flow.actions';


class SimpleFlow extends React.Component {
    constructor(props) {
        super(props);
        this.addClick = () => {
            window._addEndpoints("Window6", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
        }
    }

    componentDidMount() {
        let self = this;
        flow.initFlow();
        flow.mouseDragEvent('#moveCreateDiv', function () {
            let length = self.props.list.size + 1;
            self.props.addOneList();
            flow.addEndpoints(`Window${length}`, ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
            flow.addPointsDrag(document.getElementById(`flowchartWindow${length}`));
        })
    }

    render() {
        const window_style1 = {
            top: '408px',
            left: '60px',
        };

        const window_style2 = {
            top: '84px',
            left: '432px',
        };

        const window_style3 = {
            top: '324px',
            left: '576px',
        };

        const window_style4 = {
            top: '276px',
            left: '264px',
        };
        const window_style5 = {
            top: '176px',
            left: '264px',
        };
        const window_style6 = {
            top: '76px',
            left: '164px',
        };
        return (
            <div className="js-layout">
                <h3 id="cli">您的鼠标已经被跟踪</h3>
                <p> X 轴坐标：<span id="x"></span></p>
                <p> Y 轴坐标：<span id="y"></span></p>
                <div className="jtk-demo-header">
                    <div className="window" id="moveCreateDiv"><strong>hello wrold</strong></div>
                </div>
                <div className="jtk-demo-main">
                    <div className="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan"
                         id="canvas">
                        {
                            console.log(this.props.list)
                        }
                        {
                            this.props.list ? this.props.list.map(i => {
                                return <div key={i} className="window jtk-node" id={`flowchartWindow${i}`}
                                            style={window_style6}>
                                    <strong>{i}</strong><br/><br/></div>
                            }) : null
                        }
                        {/*<div className="window jtk-node" id="flowchartWindow6" style={window_style6}>*/}
                        {/*<strong>6</strong><br/><br/></div>*/}
                    </div>
                </div>
                <h1 onClick={this.addClick}>das</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('flow').get('list')
    }
};
const mapActionCreators = {
    addOneList
};

export default connect(mapStateToProps, mapActionCreators)(SimpleFlow);