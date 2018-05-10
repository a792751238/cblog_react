/**
 * Created by easterCat on 2017/10/10.
 */
import React from 'react';
import {Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom';

class Sidebar extends React.Component {
    render() {
        const {
            res
        } = this.props;
        return (
            <div className="layout-sidebar">
                <div className="logo"/>
                <Menu theme="dark"
                      mode="inline"
                      defaultSelectedKeys={[res]}
                >
                    <Menu.Item key="articles">
                        <NavLink to="/home/articles">
                            <Icon type="upload"/>
                            <span>全部文章</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="createArticle">
                        <NavLink to="/home/createArticle">
                            <Icon type="video-camera"/>
                            <span>新建文章</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="audio">
                        <NavLink to="/home/audio">
                            <Icon type="user"/>
                            <span>音频</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="flow">
                        <NavLink to="/home/flow">
                            <Icon type="user"/>
                            <span>流程图</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="type">
                        <NavLink to="/home/type">
                            <Icon type="user"/>
                            <span>TypeScript</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="gantt">
                        <NavLink to="/home/gantt">
                            <Icon type="user"/>
                            <span>甘特图</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="ui">
                        <NavLink to="/home/ui">
                            <Icon type="user"/>
                            <span>ui</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="table">
                        <NavLink to="/home/table">
                            <Icon type="user"/>
                            <span>table</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Sidebar;