import * as React from 'react';
import HelloCon from './test/HelloCon';
import Tag from './components/tag/Tag';
import Tab from './components/Tab/Tab';

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
                <Tab active="tab01" theme="card" onSelect={this.onSelect}>
                    <Tab.Item id="tab01">foo</Tab.Item>
                    <Tab.Item id="tab02">bar</Tab.Item>
                    <Tab.Item id="tab03">baz</Tab.Item>

                    <Tab.Content id="tab01">
                        <div className="greeting">
                            Hello {name + getExclamationMarks(enthusiasmLevel)}
                        </div>
                    </Tab.Content>
                    <Tab.Content id="tab02"> <HelloCon compiler="today" framework="good boy"/></Tab.Content>
                    <Tab.Content id="tab03">
                        <div>
                            <Tag shape="dot" color="orange"/>
                            <Tag color="orange">hello world</Tag>
                            <Tag shape="rim">hello world</Tag>
                        </div>
                    </Tab.Content>
                </Tab>
            </div>
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}