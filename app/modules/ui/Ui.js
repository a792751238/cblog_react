/**
 * Created by easterCat on 2018/4/12.
 */

import React from 'react';
import FileUpload from '../../kiana/upload/FileUpload';
import Button from '../../kiana/button/Button';
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
                    我是按钮
                </Button>
            </div>
        )
    }
}

export default  Ui;