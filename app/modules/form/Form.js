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
            value: '',
            listValue: ['东邪', '西毒', '南帝', '北丐'],
        };

        this.clickEvent = () => {

        };

        this.onChange = (e) => {
            this.setState({value: e.target.value});
        };

        this.itemClick = () => {

        };

        this.onKeydownHandle = (e) => {
            if (e.key === 'Enter' && this.state.value) {
                this.props.addTodo(this.state.value);
                this.state.listValue.push(this.state.value);
                this.setState({
                    value: '',
                    listValue: this.state.listValue
                })
            }
        }
    }


    render() {
        return (
            <div id="kiana">
                <Input value={this.state.value} onKeyDown={this.onKeydownHandle} getInputChangeValue={this.onChange}/>
                <Grid.Row space={12}>
                    <Grid.Col xs={12} md={12}>
                        <Tab active="tab04" theme="card" onClick={this.clickEvent}>
                            {
                                this.state.listValue.map((value, index) => {
                                    return <Tab.Item key={`tab0${index + 1}`}
                                                     id={`tab0${index + 1}`}
                                                     onClick={this.itemClick}>
                                        {value}
                                    </Tab.Item>
                                })
                            }
                            <Tab.Content id="tab01" key="tab01">
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
                            <Tab.Content id="tab02" key="tab02">
                                <Card header={'数据按低计价三角地加上的'}
                                      content={'数据按低计价三角地加上的数据按低计价三角地' +
                                      '加上的数据按低计价三角地加上的数据按低计价三角地' +
                                      '加上的数据按低计价三角地加上的数据按低' +
                                      '计价三角地加上的'}
                                />
                            </Tab.Content>
                            <Tab.Content id="tab03" key="tab03">
                                <Breadcrumb datas={[
                                    {id: 'Home', text: 'Home'},
                                    {onClick: () => console.log('click library'), id: 'Library', text: 'Library'},
                                    {id: 'Data', text: 'Data'},
                                    {active: true, id: 'Active', text: 'Active'}
                                ]} separator="/"/>
                            </Tab.Content>
                            <Tab.Content id="tab04" key="tab04">
                                <Input value={this.state.value} getInputChangeValue={this.onChange}/>
                            </Tab.Content>
                        </Tab>
                    </Grid.Col>
                </Grid.Row>
            </div>
        )
    }
}

Ui2.defaultProps = {
    addTodo: (value) => {
        console.log(value)
    }
};

export default Ui2;