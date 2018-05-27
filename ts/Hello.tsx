import * as React from 'react';
import HelloCon from './test/HelloCon';
import Tag from './components/tag/Tag';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

export default class Hello extends React.Component<Props, object> {
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
            </div>
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}