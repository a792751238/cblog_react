/**
 * Created by easterCat on 2017/10/31.
 */

import React from 'react';
import jp from '../../plugins/jsplumb/jsplumb';
import {Input} from 'antd';
import {flow} from './flow.common';
import './flow.scss';
import {connect} from 'react-redux';
import {addOneList, selectOneNode, modifiNode} from './flow.actions';


class SimpleFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModifiCon: false
        };
        this.showModifi = (id) => {
            this.setState({
                showModifiCon: !this.state.showModifiCon
            });
            this.props.selectOneNode(id);
        };

        this.getChangeValue = (e) => {
            let value = e.target.value;
            this.props.modifiNode(value)
        }
    }

    componentDidMount() {
        let self = this;
        flow.initFlow(function () {
            flow.addEndpoints("Window5", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
            flow.addEndpoints("Window4", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
            flow.addEndpoints("Window2", ["LeftMiddle", "BottomCenter"], ["TopCenter", "RightMiddle"]);
            flow.addEndpoints("Window3", ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
            flow.addEndpoints("Window1", ["LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter"]);

            // 将所有类名为window的对象设置为可拖动对象
            flow.addPointsDrag($(".flowchart-demo .window"));

            // 连接两个点
            flow.addConnectLine(["Window2BottomCenter", "Window3TopCenter"]);
            flow.addConnectLine(["Window2LeftMiddle", "Window4LeftMiddle"]);
            flow.addConnectLine(["Window4TopCenter", "Window4RightMiddle"]);
            flow.addConnectLine(["Window3RightMiddle", "Window2RightMiddle"]);
            flow.addConnectLine(["Window4BottomCenter", "Window1TopCenter"]);
            flow.addConnectLine(["Window3BottomCenter", "Window1BottomCenter"]);
        });
        flow.mouseDragEvent('#moveCreateDiv', function (pos) {
            let length = self.props.list.size + 1;
            self.props.addOneList(pos);
            flow.addEndpoints(`Window${length}`, ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
            flow.addPointsDrag(document.getElementById(`flowchartWindow${length}`));
        })
    }

    render() {


        return (
            <div className="js-layout">
                <div className="jtk-demo-header">
                    <div className="window" id="moveCreateDiv"><strong>hello wrold</strong></div>
                </div>
                <div className="jtk-demo-main">
                    <div className="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan"
                         id="canvas">
                        {
                            this.props.list ? this.props.list.map((item, index) => {
                                return <div key={item.get('id')} className="window jtk-node"
                                            id={`flowchartWindow${item.get('id')}`}
                                            style={{
                                                top: `${item.get('position').get('y')}px`,
                                                left: `${item.get('position').get('x')}px`,
                                            }}
                                            onDoubleClick={() => {
                                                this.showModifi(item.get('id'))
                                            }}
                                >
                                    <strong>{item.get('text') ? item.get('text') : '无'}</strong><br/><br/></div>
                            }) : null
                        }
                    </div>
                </div>
                {
                    this.state.showModifiCon ? <div className="modifi-con">
                        <Input onChange={this.getChangeValue}
                               placeholder={this.props.s_list.get('text') ? this.props.s_list.get('text') : '无'}/>
                    </div> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('flow').get('list'),
        s_list: state.get('flow').get('selectList')
    }
};
const mapActionCreators = {
    addOneList, selectOneNode, modifiNode
};

export default connect(mapStateToProps, mapActionCreators)(SimpleFlow);