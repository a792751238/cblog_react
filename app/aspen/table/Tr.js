/**
 * Created by easterCat on 2018/5/10.
 */
import React, {Component} from 'react';


class Tr extends Component {
    render() {
        let {columns, data} = this.props;
        let tds = [];

        columns.map((column, index) => {
            let name = column['name'];
            let content = data[name];
            let width = column['width'];

            tds.push(<td key={name || index}>
                <div className="layui-table-cell" style={{
                    width: `${width}`
                }}>{content}</div>
            </td>)
        });

        return <tr>{tds}</tr>
    }
}

export default Tr;