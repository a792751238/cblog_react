/**
 * Created by easterCat on 2018/5/10.
 */
import React, {Component} from 'react';

class Header extends Component {
    render() {
        const {columns} = this.props;

        let style = {
            width: `${columns.width}`
        };

        return <th>
            <div className="layui-table-cell" style={style}>
                {columns.name}
            </div>
        </th>
    }
}

export default Header;