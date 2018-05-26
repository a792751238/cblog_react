/**
 * Created by easterCat on 2018/5/10.
 */
import React from 'react';
import FileUpload from '../../aspen/upload/FileUpload';
import Button from '../../aspen/button/Button';
import ButtonGroup from '../../aspen/button/ButtonGroup';
import ButtonContainer from '../../aspen/button/ButtonContainer';
import Icon from '../../aspen/icon/Icon';
import Table from '../../aspen/table/Table';

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
            </div>
        )
    }
}

export default Ui2;