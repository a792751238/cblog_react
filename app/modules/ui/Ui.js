/**
 * Created by easterCat on 2018/4/12.
 */

import React from 'react';
import FileUpload from '../../kiana/upload/FileUpload';

class Ui extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="kiana">
                <FileUpload>
                    <div>hello wrold</div>
                </FileUpload>
            </div>
        )
    }
}

export default  Ui;