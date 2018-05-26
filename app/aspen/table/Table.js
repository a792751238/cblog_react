/**
 * Created by easterCat on 2018/5/10.
 */
import React, {Component} from 'react';
import Tr from './Tr';
import Header from './Header';

export default class Table extends Component {

    renderBody(columns) {
        if (!columns) return;

        let {dataSource} = this.props;

        let trs = dataSource.map((data, index) => {
            return (
                <Tr key={Date.now() + index}
                    columns={columns}
                    data={data}
                />
            )
        });

        return <tbody>{trs}</tbody>
    }

    renderHeader(columns) {
        let headers = [];

        columns.forEach((column, index) => {
            headers.push(
                <Header columns={column}/>
            )
        });

        return <thead>
        <tr>{headers}</tr>
        </thead>
    }

    render() {
        let {columns, children} = this.props;

        const header = this.renderHeader(columns);
        const body = this.renderBody(columns);

        return (
            <div className="layui-form layui-border-box layui-table-view">
                <div className="layui-table-box">
                    <div className="layui-table-header">
                        <table className="layui-table">
                            { children }
                            { columns && header }
                        </table>
                    </div>
                    <div className="layui-table-body layui-table-main">
                        <table className="layui-table">
                            { children }
                            { columns && body }
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}