/**
 * Created by easterCat on 2018/5/10.
 */
import React from 'react';
import Nav from '../../aspen/components/nav/Nav';
import Grid from '../../aspen/components/grid/Grid';
import Card from '../../aspen/components/card/Card';
import Breadcrumb from '../../aspen/components/breadcrumb/Breadcrumb';
import Tab from '../../aspen/components/tab/Tab';
import Input from '../../aspen/components/input/Input';

class Ui2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '123'
        };

        this.clickEvent = () => {
            alert(123)
        };

        this.onChange = (e) => {
            this.setState({
                value: e.target.value
            })
        }
    }


    render() {
        return (
            <div id="kiana">
                <Grid.Row space={12}>
                    <Grid.Col xs={12} md={12}>
                        <Tab active="tab04" theme="card">
                            <Tab.Item id="tab01">bar</Tab.Item>
                            <Tab.Item id="tab02">bar</Tab.Item>
                            <Tab.Item id="tab03">bar</Tab.Item>
                            <Tab.Item id="tab04">bar</Tab.Item>

                            <Tab.Content id="tab01">
                                <Nav defaultId="最新活动" type="tree" color="cyan">
                                    <Nav.List id="最新活动" dropDown={[{
                                        text: '今天是个好日子',
                                        onClick: this.clickEvent
                                    }, {
                                        text: '今天',
                                        onClick: this.clickEvent
                                    }, {
                                        text: '好日子',
                                        onClick: this.clickEvent
                                    }, {
                                        text: '是个',
                                        onClick: this.clickEvent
                                    }]}>
                                        最新活动
                                    </Nav.List>
                                    <Nav.List id="产品" dropDown={[{
                                        text: '今天',
                                        onClick: this.clickEvent
                                    }]}>
                                        产品
                                    </Nav.List>
                                    <Nav.List id="活动">
                                        活动
                                    </Nav.List>
                                    <Nav.List id="设置">
                                        设置
                                    </Nav.List>
                                </Nav>
                            </Tab.Content>
                            <Tab.Content id="tab02">
                                <Card header={'数据按低计价三角地加上的'}
                                      content={'数据按低计价三角地加上的数据按低计价三角地' +
                                      '加上的数据按低计价三角地加上的数据按低计价三角地' +
                                      '加上的数据按低计价三角地加上的数据按低' +
                                      '计价三角地加上的'}
                                />
                            </Tab.Content>
                            <Tab.Content id="tab03">
                                <Breadcrumb datas={[
                                    {id: 'Home', text: 'Home'},
                                    {onClick: () => console.log('click library'), id: 'Library', text: 'Library'},
                                    {id: 'Data', text: 'Data'},
                                    {active: true, id: 'Active', text: 'Active'}
                                ]} separator="/"/>
                            </Tab.Content>
                            <Tab.Content id="tab04">
                                <Input value={this.state.value} getInputChangeValue={this.onChange}/>
                            </Tab.Content>
                        </Tab>
                    </Grid.Col>
                </Grid.Row>
            </div>
        )
    }
}

export default Ui2;