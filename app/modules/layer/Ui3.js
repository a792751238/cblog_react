/**
 * Created by easterCat on 2018/5/10.
 */
import React from 'react';
import Card from '../../aspen/components/card/Card';
import Layer from '../../aspen/components/layer/Layer';
import Button from '../../aspen/components/button/Button';

class Ui2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }

        this.confirmEvent = () => {
            this.setState({
                visible: true
            })
        }
        this.cancelEvent = () => {
            this.setState({
                visible: false
            })
        }
    }

    render() {
        return (
            <div id="kiana">
                <Button onClick={this.confirmEvent}>弹弹弹</Button>
                <Layer location="top"
                       visible={this.state.visible}
                       confirmEvent={this.confirmEvent}
                       cancelEvent={this.cancelEvent}
                >
                    <Card header={'数据按低计价三角地加上的'}
                          content={'数据按低计价三角地加上的数据按低计价三角地' +
                          '加上的数据按低计价三角地加上的数据按低计价三角地' +
                          '加上的数据按低计价三角地加上的数据按低' +
                          '计价三角地加上的'}
                    />
                </Layer>
                <Layer location="center"
                       title="今天是个好人"
                       width="400"
                       visible={this.state.visible}
                       confirmEvent={this.confirmEvent}
                       cancelEvent={this.cancelEvent}
                >
                    <Card header={'数据按低计价三角地加上的'}
                          content={'数据按低计价三角地加上的数据按低计价三角地' +
                          '加上的数据按低计价三角地加上的数据按低计价三角地' +
                          '加上的数据按低计价三角地加上的数据按低' +
                          '计价三角地加上的'}
                    />
                </Layer>
            </div>
        )
    }
}

export default Ui2;