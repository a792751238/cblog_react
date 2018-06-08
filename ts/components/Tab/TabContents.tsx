import * as React from 'react';
import * as classNames from 'classnames';

export interface props {
    children?: any,
    onClick?: (activeId: string) => void,
    activeId?: string,
    disabled?: boolean,
    id: string,
}

class TabContents extends React.Component<props, object> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let {id} = this.props;
        this.props.onClick && this.props.onClick(id);
    }

    render() {
        let {children, activeId, id, disabled, ...other} = this.props;

        let className = classNames({
            'layui-tab-item': true,
            'layui-show': activeId === id,
        });

        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}

export default TabContents;