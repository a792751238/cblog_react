import * as React from 'react';
import * as classNames from 'classnames';
import NavItem from './NavItem';

export interface props {
    children: any,
    onSelect: any,
    active: string,
    stateLess?: boolean,
    activeId?: string,
}

class Nav extends React.Component<props, object> {

    static Item = NavItem;

    constructor(props) {
        super(props);

        this.state = {
            activeId: props.activeId || ''
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

        this.setState({activeId: id}, () => {
            onSelect && onSelect.call(this, id);
        })
    }

    renderItems() {
        let state = this.state;
        let props = this.props;
        const {active, stateLess, children} = props;

        let items = React.Children.map(children, (child: any, index) => {
            if (!child) return;
            const id = child.props.id || index.toString();
            const props = {
                active: stateLess ? active === id : (state as any).activeId === id,
                id,
                onClick: this.handleChoose.bind(this, id)
            };
            return React.cloneElement(child, props);
        });

        return items;
    }

    render() {

        let className = classNames({
            'layui-tab-title': true
        });

        return (
            <ul className={className}>
                {this.renderItems()}
            </ul>
        )
    }
}

export default Nav;