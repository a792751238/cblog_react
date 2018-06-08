import * as React from 'react';
import * as classNames from 'classnames';
import TabItem from './TabItem';
import TabContents from './TabContents';

export interface props {
    children: any,
    onSelect: any,
    active: string,
    activeId?: string,
    theme?: string
}

class Tab extends React.Component<props, object> {

    static Item = TabItem;
    static Content = TabContents;
    static defaultProps = {
        theme: 'default', //'default','card','brief' 3种风格
    };

    constructor(props) {
        super(props);

        this.state = {
            activeId: props.active || ''
        };

        this.renderItems = this.renderItems.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.props.active) {
            this.setState({activeId: nextProps.active})
        }
    }

    handleChoose(id) {
        const {onSelect} = this.props;

        this.setState({
            activeId: id
        }, () => {
            onSelect && onSelect.call(this, id);
        })
    }

    renderItems() {
        const activeId = (this.state as any).activeId;
        const children = this.props.children;
        const length = children.length / 2;

        let arr = children.slice(0, length);

        let items = React.Children.map(arr, (child: any, index) => {
            if (!child) return;
            const id = child.props.id || index.toString();
            const props = {
                active: activeId,
                id,
                onClick: this.handleChoose.bind(this, id)
            };
            return React.cloneElement(child, props);
        });

        return items;
    }

    renderContents() {
        const activeId = (this.state as any).activeId;
        const children = this.props.children;
        const length = children.length / 2;

        let arr = children.slice(-length);

        let contents = React.Children.map(arr, (child: any, index) => {
            if (!child) return;
            const id = child.props.id || index.toString();
            const props = {
                activeId,
                id,
            };
            return React.cloneElement(child, props);
        });

        return contents;
    }

    render() {
        const {theme} = this.props;

        let tabPaneClassName = classNames({
            'layui-tab-title': true,
        });

        let tabClassName = classNames({
            'layui-tab': true,
            'layui-tab-card': !(theme === 'default') && theme === 'card',
            'layui-tab-brief': !(theme === 'default') && theme === 'brief',
        });

        return (
            <div className={tabClassName}>
                <ul className={tabPaneClassName}>
                    {this.renderItems()}
                </ul>
                <div className="layui-tab-content">
                    {this.renderContents()}
                </div>
            </div>
        )
    }
}

export default Tab;