import * as React from 'react';
import HelloCon from './test/HelloCon';
import Tag from './components/tag/Tag';
import Nav from './components/nav/Nav';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

export default class Hello extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(id) {
    };

    render() {
        const {name, enthusiasmLevel = 1} = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <HelloCon compiler="today" framework="good boy"/>
                <Tag shape="dot" color="orange"/>
                <Tag color="orange">hello world</Tag>
                <Tag shape="rim">hello world</Tag>

                <Nav active="tab01" theme="brief" onSelect={this.onSelect}>
                    <Nav.Item id="tab01">foo</Nav.Item>
                    <Nav.Item id="tab02">bar</Nav.Item>
                    <Nav.Item id="tab03">baz</Nav.Item>
                </Nav>
            </div>
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}