/**
 * Created by easterCat on 2017/10/13.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Card, Col, Row, Pagination, Icon, message, Popover, Button, TreeSelect, Tree} from 'antd';

const TreeNode = Tree.TreeNode;
import {getAllArticles, deleteArticleById} from './article.actions';

class Articles extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popoverVisible: false
        };

        this.goToArticle = (id) => {
            const {history} = this.props;
            if (id) {
                history.push(`/home/article/${id}`);
            } else {
                message.error('获取文章id失败');
            }
        };

        //页码改变后的回调函数
        this.changePageNum = (page, pagesize) => {
            let where = {
                limit: 10,
                skip: (page - 1) * 10
            };
            this.props.getAllArticles(where);
        };

        this.deleteOneArticle = (e, id) => {
            e.stopPropagation();
            this.props.deleteArticleById(id)
                .then(() => message.success('删除文章成功'));
        };

        this.handlePopVisible = (popoverVisible) => {
            this.setState({popoverVisible});
        };

        this.hidePop = () => {
            this.setState({popoverVisible: false});
        }
    }

    componentWillMount() {
        //初始化加载前10篇文章
        let where = {
            limit: 10,
            skip: 0
        };
        this.props.getAllArticles(where);
    }

    render() {
        const {articles, count, date} = this.props;

        if (!articles || !articles.size) {
            return null
        }

        let node_jsx, pop_jsx;
        if (date && date.size) {
            node_jsx = () => {
                date.map((item, index) => {
                    return <TreeNode title={index} key={index}>
                        {
                            item.map(i => {
                                return <TreeNode title={i.get('createDate')} key={i.get('createDate')}> </TreeNode>
                            })
                        }
                    </TreeNode>
                })
            };


            pop_jsx = <div>
                <Tree
                    // defaultExpandedKeys={['0-0-0', '0-0-1']}
                    // defaultSelectedKeys={['0-0-0', '0-0-1']}
                    onSelect={this.onSelect}
                >
                    {node_jsx}
                </Tree>
            </div>;
        }

        return (
            <div className="articles-content">
                <div className="pop-content">
                    <Popover placement="leftTop"
                             title='选择日期'
                             content={pop_jsx}
                             trigger="click"
                             visible={this.state.popoverVisible}
                             onVisibleChange={this.handlePopVisible}
                    >
                        <Button>选择日期</Button>
                    </Popover>
                </div>
                <div className="item-con">
                    {
                        articles && articles.size ? articles.map(i => {
                            return <div key={i.get('_id')} className="articles-item"
                                        onClick={() => this.goToArticle(i.get('_id'))}>
                                <div className="item-title">
                                    {i.get('title')}
                                </div>
                                <div className="item-detail">
                                    Create by easterCat at {new Date(i.get('createDate')).toLocaleString()}
                                    {
                                        i.get('pv') ? <span style={{marginLeft: 30}}>访问次数:{i.get('pv')}</span> : null
                                    }
                                </div>
                                <div dangerouslySetInnerHTML={{__html: i.get('content')}}
                                     className="item-content markdown-body">
                                </div>
                                <div className="item-operate">
                                    <Icon className="delete-btn" type="delete"
                                          onClick={(e) => this.deleteOneArticle(e, i.get('_id'))}/>
                                </div>
                            </div>
                        }) : null
                    }
                </div>
                <div className="plu-Pagination">
                    <Pagination defaultCurrent={1} total={count} onChange={this.changePageNum}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.get('article').get('articles'),
        count: state.get('article').get('articles_count'),
        date: state.get('article').get('articles_date'),
    }
};

const mapActionCreators = {
    getAllArticles,
    deleteArticleById
};
export default connect(mapStateToProps, mapActionCreators)(Articles);
