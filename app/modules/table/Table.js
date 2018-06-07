/**
 * Created by easterCat on 2018/5/10.
 */
import React from 'react';
import Button from '../../aspen/components/button/Button';
import Table from '../../aspen/components/table/Table';
import Tag from '../../aspen/components/tag/Tag';
import Nav from '../../aspen/components/tab/Nav';
import CirclePorgress from '../../aspen/components/progress/CirclePorgress';
import Porgress from '../../aspen/components/progress/Porgress';
import Grid from '../../aspen/components/grid/Grid';

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
                <Button type="primary">
                    table
                </Button>
                <Table columns={columns}
                       dataSource={datas}
                />
                <Tag shape="dot"/>
                <Tag color="black">hello world</Tag>
                <Tag shape="rim">hello world</Tag>
                <Nav active="tab01" theme="brief">
                    <Nav.Item id="tab01">foo</Nav.Item>
                    <Nav.Item id="tab02">bar</Nav.Item>
                    <Nav.Item id="tab03">baz</Nav.Item>
                </Nav>
                <CirclePorgress/>
                <Porgress color="cyan" percent={40} size="big" showText={true}/>
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
            </div>
        )
    }
}

export default Ui2;