import * as React from 'react';
import * as classNames from 'classnames';
import NavItem from './NavItem';

export interface props {
    children: any,
    onSelect: any,
    active: string,
    activeId?: string,
    theme?: string
}

class Nav extends React.Component<props, object> {

    static Item = NavItem;

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

        let items = React.Children.map(children, (child: any, index) => {
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
            </div>
        )
    }
}

export default Nav;