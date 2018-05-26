/**
 * Created by fuhuo on 2018/3/29.
 */
import * as React from "react";
import {Top} from "./Top";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export default  class HelloCon extends React.Component<HelloProps, {}> {
    render() {
        return <Top compiler={this.props.compiler} framework={this.props.framework}/>
    }
}