import * as React from 'react';
import * as classNames from 'classnames';

export interface props {
    color?: string, //{默认红色,orange,green,cyan,blue,black,gray}
    shape?: string //{默认方形,rim,dot}
}

class Tag extends React.Component<props, object> {

    render() {
        const {children, shape, color, ...other} = this.props;

        let prefix = 'layui';

        let className = classNames({
            [`${prefix}-badge`]: !shape,
            [`${prefix}-badge-${shape}`]: !!shape,
            [`${prefix}-bg-${color}`]: color,
        });

        return (
            <span className={className} {...other}>
                {children}
            </span>
        )
    }
}


export default Tag;