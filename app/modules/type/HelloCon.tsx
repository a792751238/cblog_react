/**
 * Created by fuhuo on 2018/3/29.
 */
import * as React from "react";

import { Hello } from "./components/Hello";

export class HelloCon extends React.Component<HelloProps, {}> {
    render() {
        return <Hello compiler="TypeScript" framework="React" />
    }
}