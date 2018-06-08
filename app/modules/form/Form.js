/**
 * Created by easterCat on 2018/5/10.
 */
import React from 'react';
import Nav from '../../aspen/components/nav/Nav';
import Grid from '../../aspen/components/grid/Grid';

class Ui2 extends React.Component {
    constructor(props) {
        super(props);
        this.clickEvent = () => {
            alert(123)
        }
    }

    render() {
        return (
            <div id="kiana">
                <Grid.Row space={12}>
                    <Grid.Col xs={12} md={12}>
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
                    </Grid.Col>
                    <Grid.Col xs={12} md={12}>
                        <Nav type='tree'/>
                    </Grid.Col>
                </Grid.Row>
            </div>
        )
    }
}

export default Ui2;