/**
 * Created by easterCat on 2018/4/12.
 */

import React from 'react';
import FileUpload from '../../aspen/upload/FileUpload';
import Button from '../../aspen/components/button/Button';
import ButtonGroup from '../../aspen/components/button/ButtonGroup';
import ButtonContainer from '../../aspen/components/button/ButtonContainer';
import Icon from '../../aspen/icon/Icon';

class Ui extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="kiana">
                <p style={{padding: '20px'}}>大小</p>
                <FileUpload>
                    <div className="layui-btn">hello wrold</div>
                </FileUpload>
                <p style={{padding: '20px'}}>大小</p>
                <Button type="primary">
                    我是按钮
                </Button>
                <Button >
                    我是按钮
                </Button>
                <Button type="normal">
                    我是按钮
                </Button>
                <Button type="warning">
                    我是按钮
                </Button>
                <Button type="danger">
                    我是按钮
                </Button>
                <Button type="disabled">
                    我是按钮
                </Button>
                <p style={{padding: '20px'}}>大小</p>
                <Button type="normal"
                        size="lg"
                >
                    我是按钮
                </Button>
                <Button type="normal"
                        size="md"
                >
                    我是按钮
                </Button>
                <Button type="normal"
                        size="sm"
                >
                    我是按钮
                </Button>
                <Button type="normal"
                        size="xs"
                >
                    我是按钮
                </Button>
                <p style={{padding: '20px'}}>按钮圆角</p>
                <Button type="normal"
                        size="xs"
                        shape="circle"
                >
                    我是按钮
                </Button>
                <Button type="normal"
                        shape="circle"
                >
                    我是按钮
                </Button>
                <Button type="normal"
                        size="lg"
                        shape="circle"
                        onClick={() => {
                            console.log('我点击了按钮')
                        }}
                >
                    我是按钮
                </Button>
                <Button type="normal"
                        size="lg"
                        shape="circle"
                        onClick={() => {
                            console.log('我点击了按钮')
                        }}
                        href="www.baidu.com"
                >
                    <Icon icon='emo-happy'/>我是按钮
                </Button>
                <p style={{padding: '20px'}}>字标</p>
                <Icon icon='emo-happy' size={40}/>
                <p style={{padding: '20px'}}>按钮组</p>
                <ButtonGroup >
                    <Button type="normal"
                            size="lg"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                    <Button type="normal"
                            size="md"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                    <Button type="normal"
                            size="sm"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                </ButtonGroup>
                <ButtonGroup >
                    <Button type="normal"
                            size="lg"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                    <Button type="normal"
                            size="md"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                    <Button type="normal"
                            size="sm"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                </ButtonGroup>
                <ButtonGroup >
                    <Button type="normal"
                            size="lg"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                    <Button type="normal"
                            size="md"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                    <Button type="normal"
                            size="sm"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                </ButtonGroup>
                <ButtonContainer >
                    <Button type="normal"
                            size="lg"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                    <Button type="normal"
                            size="md"
                    >
                        我是按钮
                    </Button>
                    <Button type="normal"
                            size="sm"
                    >
                        <Icon icon='emo-happy'/>我是按钮
                    </Button>
                </ButtonContainer>
                <Icon icon='spin2' size={40} spin={true}/>
            </div>
        )
    }
}

export default  Ui;