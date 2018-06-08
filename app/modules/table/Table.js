/**
 * Created by easterCat on 2018/5/10.
 */
import React from 'react';
import Button from '../../aspen/components/button/Button';
import Table from '../../aspen/components/table/Table';
import Tag from '../../aspen/components/tag/Tag';
import Tab from '../../aspen/components/tab/Tab';
import CirclePorgress from '../../aspen/components/progress/CirclePorgress';
import Porgress from '../../aspen/components/progress/Porgress';
import Grid from '../../aspen/components/grid/Grid';
import Icon from '../../aspen/icon/Icon';
import Card from '../../aspen/components/card/Card';

class Ui2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let datas = [{
            name: '1',
            position: '2',
            office: '3'
        }, {
            name: '11',
            position: '21',
            office: '31'
        }, {
            name: '12',
            position: '22',
            office: '32'
        }, {
            name: '13',
            position: '23',
            office: '33'
        }];

        let columns = [
            {name: 'name', width: '130px'},
            {name: 'position', width: '130px'},
            {name: 'office', width: '130px'},
        ];

        return (
            <div id="kiana">
                <p style={{padding: '20px'}}>大小</p>

                <Tab active="tab01" theme="card">
                    <Tab.Item id="tab01"><span>我是能够删除的<Icon icon='emo-happy' style={{
                        marginLeft: '5px'
                    }} size={10}/></span></Tab.Item>
                    <Tab.Item id="tab02">bar</Tab.Item>
                    <Tab.Item id="tab03">baz</Tab.Item>
                    <Tab.Item id="tab04">baz</Tab.Item>
                    <Tab.Item id="tab05">baz</Tab.Item>
                    <Tab.Item id="tab06">baz</Tab.Item>

                    <Tab.Content id="tab01">
                        <Table columns={columns}
                               dataSource={datas}
                        />
                    </Tab.Content>
                    <Tab.Content id="tab02">
                        <Button type="primary">
                            table
                        </Button>
                    </Tab.Content>
                    <Tab.Content id="tab03">
                        <div>
                            <Tag shape="dot"/>
                            <Tag color="black">hello world</Tag>
                            <Tag shape="rim">hello world</Tag>
                        </div>
                    </Tab.Content>
                    <Tab.Content id="tab04">
                        <CirclePorgress percent={40}/>
                    </Tab.Content>
                    <Tab.Content id="tab05">
                        <Porgress color="cyan" percent={40} size="big" showText={true}/>
                    </Tab.Content>
                    <Tab.Content id="tab06">
                        <Grid.Row space={5}>
                            <Grid.Col xs={12} md={6}>
                                <div style={{height: '100px', background: '#009688'}}>
                                    hell world
                                </div>
                            </Grid.Col>
                            <Grid.Col xs={12} md={6}>
                                <div style={{height: '100px', background: '#009688'}}>
                                    hell world
                                </div>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row space={5}>
                            <Grid.Col xs={12} md={6}>
                                <div style={{height: '100px', background: '#009688'}}>
                                    hell world
                                </div>
                            </Grid.Col>
                            <Grid.Col xs={12} md={6}>
                                <div style={{height: '100px', background: '#009688'}}>
                                    hell world
                                </div>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row space={5}>
                            <Grid.Col xs={12} md={6}>
                                <div style={{height: '100px', background: '#009688'}}>
                                    hell world
                                </div>
                            </Grid.Col>
                            <Grid.Col xs={12} md={6}>
                                <div style={{height: '100px', background: '#009688'}}>
                                    hell world
                                </div>
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row space={5}>
                            <Grid.Col xs={12} md={5}>
                                <div style={{height: '100px', background: '#009688'}}>
                                    hell world
                                </div>
                            </Grid.Col>
                            <Grid.Col xs={12} md={7}>
                                <Grid.Row>
                                    <Grid.Col xs={12} md={3}>
                                        <div style={{height: '100px', background: '#1E9FFF'}}>
                                            hell world
                                        </div>
                                    </Grid.Col>
                                    <Grid.Col xs={12} md={9}>
                                        <div style={{height: '100px', background: '#FFB800'}}>
                                            hell world
                                        </div>
                                    </Grid.Col>
                                </Grid.Row>
                            </Grid.Col>
                        </Grid.Row>
                    </Tab.Content>
                </Tab>
            </div>
        )
    }
}

export default Ui2;