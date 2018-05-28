import './public/index.html';
import * as React from "react";
import 'Lay';
import * as ReactDOM from "react-dom";

import Hello from "./Hello";

ReactDOM.render(
    <Hello name="TypeScript" enthusiasmLevel={10}/>,
    document.getElementById('root') as HTMLElement
);