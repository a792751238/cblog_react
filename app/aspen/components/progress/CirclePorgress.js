/**
 * Created by easterCat on 2018/5/22.
 */
import React from 'react';
import './process.scss';

class Process extends React.Component {
    constructor() {
        super();
        this.state = {
            circleLength: '',
        }
    }

    componentDidMount() {
        let circle = this.circle;
        let circleLength = Math.floor(2 * Math.PI * circle.getAttribute("r"));
        this.setState({circleLength});
    }

    render() {
        let {percent, width, insideColor, degree, outsideColor} = this.props;
        let {circleLength} = this.state;

        let value = parseFloat(percent).toFixed(2);
        value = Math.max(0, value);
        value = Math.min(100, value);

        let dashArray = `${circleLength * value / 100},10000`;
        let svg_width = width + degree * 2;

        let process_style = {
            width: `${svg_width}px`,
            height: `${svg_width}px`,
        };

        return (
            <div className="process" style={process_style}>
                <svg height={svg_width} width={svg_width}>
                    <circle fill="none"
                            r={width / 2}
                            cx={svg_width / 2}
                            cy={svg_width / 2}
                            stroke={insideColor}
                            strokeWidth={degree}
                            strokeLinecap="round"
                    />
                    <circle className="circle"
                            fill="none"
                            ref={(circle) => {
                                this.circle = circle
                            }}
                            cx={svg_width / 2}
                            cy={svg_width / 2}
                            r={width / 2}
                            stroke={outsideColor}
                            strokeWidth={degree}
                            strokeLinecap="round"
                            strokeDasharray={dashArray}
                    />
                </svg>
                <span className="percent-text">{`${percent}%`}</span>
            </div>
        )
    }
}

Process.defaultProps = {
    width: 150,
    insideColor: '#e2e2e2',
    outsideColor: '#2F4056',
    degree: 5,
    percent: 0,
};

export default Process;