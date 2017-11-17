/**
 * Created by easterCat on 2017/11/10.
 */
import React from 'react';
import jp from '../../plugins/jsplumb/jsplumb';
import './flow.scss';
import {connect} from 'react-redux';
import {addOneList} from './flow.actions';

class JsPlumb extends React.Component {
    constructor(props) {
        super(props);
        this.addClick=()=>{
            
        }
    }

    componentDidMount() {
        var self = this;
        var jsPlumb = jp.jsPlumb;
        jsPlumb.ready(function () {
            //生成jsPlumb实例
            var instance = jsPlumb.getInstance({
                // default drag options
                DragOptions: {cursor: 'pointer', zIndex: 2000},
                // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
                // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
                ConnectionOverlays: [
                    //连线箭头的设置
                    ["Arrow", {
                        location: 1,
                        visible: true,
                        width: 11,
                        length: 11,
                        id: "ARROW",
                        events: {
                            click: function () {
                                alert("you clicked on the arrow overlay")
                            }
                        }
                    }],
                    //线上的标签
                    ["Label", {
                        location: 0.1,
                        id: "label",
                        cssClass: "aLabel",
                        events: {
                            tap: function () {
                                alert("hey");
                            }
                        }
                    }]
                ],
                Container: "canvas"
            });

            var basicType = {
                connector: "StateMachine",
                paintStyle: {stroke: "red", strokeWidth: 4},
                hoverPaintStyle: {stroke: "blue"},
                overlays: [
                    "Arrow"
                ]
            };
            instance.registerConnectionType("basic", basicType);

            // 这里是连接线的两个点的样式
            var connectorPaintStyle = {
                    strokeWidth: 2,
                    stroke: "#61B7CF",
                    joinstyle: "round",
                    outlineStroke: "white",
                    outlineWidth: 2
                },
                //线鼠标移上的效果
                connectorHoverStyle = {
                    strokeWidth: 3,
                    stroke: "#216477",
                    outlineWidth: 5,
                    outlineStroke: "white"
                },
                endpointHoverStyle = {
                    fill: "#216477",
                    stroke: "#216477"
                },
                // the definition of source endpoints (the small blue ones)
                //起始点样式设置
                sourceEndpoint = {
                    endpoint: "Dot",
                    paintStyle: {
                        stroke: "#7AB02C",
                        fill: "transparent",
                        radius: 7,
                        strokeWidth: 1
                    },
                    isSource: true,
                    connector: ["Flowchart", {stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true}],
                    connectorStyle: connectorPaintStyle,
                    hoverPaintStyle: endpointHoverStyle,
                    connectorHoverStyle: connectorHoverStyle,
                    dragOptions: {},
                    overlays: [
                        ["Label", {
                            location: [0.5, 1.5],
                            label: "Drag",
                            cssClass: "endpointSourceLabel",
                            visible: false
                        }]
                    ]
                },
                // the definition of target endpoints (will appear when the user drags a connection)
                //目标点的样式
                targetEndpoint = {
                    endpoint: "Dot",
                    paintStyle: {fill: "#7AB02C", radius: 7},
                    hoverPaintStyle: endpointHoverStyle,
                    maxConnections: -1,
                    dropOptions: {hoverClass: "hover", activeClass: "active"},
                    isTarget: true,
                    overlays: [
                        ["Label", {
                            location: [0.5, -0.5],
                            label: "Drop",
                            cssClass: "endpointTargetLabel",
                            visible: false
                        }]
                    ]
                },
                init = function (connection) {
                    connection.getOverlay("label").setLabel(connection.sourceId.substring(15) + "-" + connection.targetId.substring(15));
                };


            /**
             * 创建一个节点
             * @param toId 传入节点的id
             * @param sourceAnchors 创建源头节点
             * @param targetAnchors 创建目标节点
             * @private
             */
            window._addEndpoints = function (toId, sourceAnchors, targetAnchors) {

                for (var i = 0; i < sourceAnchors.length; i++) {
                    var sourceUUID = toId + sourceAnchors[i];
                    instance.addEndpoint("flowchart" + toId, sourceEndpoint, {
                        anchor: sourceAnchors[i],
                        uuid: sourceUUID
                    });
                }
                for (var j = 0; j < targetAnchors.length; j++) {
                    var targetUUID = toId + targetAnchors[j];
                    instance.addEndpoint("flowchart" + toId, targetEndpoint, {
                        anchor: targetAnchors[j],
                        uuid: targetUUID
                    });
                }
            };

            // suspend drawing and initialise.
            instance.batch(function () {

                let length = 5;
                $('#moveCreateDiv').on('mousemove', function () {
                    mouseMove();
                });
                $('#moveCreateDiv').on('mouseup', function () {
                    console.log('leace');
                    self.props.addOneList();
                    // $(this).hide();
                    length++;
                    _addEndpoints(`Window${length}`, ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
                    instance.draggable(document.getElementById(`flowchartWindow${length}`), {grid: [20, 20]});
                });
                function mousePosition(ev) {
                    var div_offset = $('.flowchart-demo').offset();
                    if (ev.pageX || ev.pageY) {
                        let _pos = {
                            x: ev.pageX - div_offset.left,
                            y: ev.pageY - div_offset.top
                        };
                        return _pos;
                    }
                    return {
                        x: ev.clientX + document.body.scrollLeft - div_offset.left,
                        y: ev.clientY + document.body.scrollTop - div_offset.top
                    };
                }

                function mouseMove(ev) {
                    ev = ev || window.event;
                    var mousePos = mousePosition(ev);
                    document.getElementById('x').innerHTML = mousePos.x;
                    document.getElementById('y').innerHTML = mousePos.y;
                }

                _addEndpoints("Window5", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
                _addEndpoints("Window4", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
                _addEndpoints("Window2", ["LeftMiddle", "BottomCenter"], ["TopCenter", "RightMiddle"]);
                _addEndpoints("Window3", ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
                _addEndpoints("Window1", ["LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter"]);

                // listen for new connections; initialise them the same way we initialise the connections at startup.
                instance.bind("connection", function (connInfo, originalEvent) {
                    init(connInfo.connection);
                });

                // 将所有类名为window的对象设置为可拖动对象
                instance.draggable(document.querySelectorAll(".flowchart-demo .window"), {grid: [20, 20]});
                instance.draggable(document.querySelectorAll(".jtk-demo-header .window"), {grid: [20, 20]});

                // 连接两个点
                instance.connect({uuids: ["Window2BottomCenter", "Window3TopCenter"], editable: true});
                instance.connect({uuids: ["Window2LeftMiddle", "Window4LeftMiddle"], editable: true});
                instance.connect({uuids: ["Window4TopCenter", "Window4RightMiddle"], editable: true});
                instance.connect({uuids: ["Window3RightMiddle", "Window2RightMiddle"], editable: true});
                instance.connect({uuids: ["Window4BottomCenter", "Window1TopCenter"], editable: true});
                instance.connect({uuids: ["Window3BottomCenter", "Window1BottomCenter"], editable: true});


                //连接线的点击事件
                instance.bind("click", function (conn, originalEvent) {
                    // if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
                    //   instance.detach(conn);
                    conn.toggleType("basic");
                });

                instance.bind("connectionDrag", function (connection) {
                    console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
                });

                instance.bind("connectionDragStop", function (connection) {
                    console.log("connection " + connection.id + " was dragged");
                });

                instance.bind("connectionMoved", function (params) {
                    console.log("connection " + <params></params>.connection.id + " was moved");
                });
            });

            jsPlumb.fire("jsPlumbDemoLoaded", instance);
        });


    }

    render() {
        const window_style1 = {
            top: '408px',
            left: '60px',
        };

        const window_style2 = {
            top: '84px',
            left: '432px',
        };

        const window_style3 = {
            top: '324px',
            left: '576px',
        };

        const window_style4 = {
            top: '276px',
            left: '264px',
        };
        const window_style5 = {
            top: '176px',
            left: '264px',
        };
        const window_style6 = {
            top: '76px',
            left: '164px',
        };
        return (
            <div className="js-layout">
                <h3 id="cli">您的鼠标已经被跟踪</h3>
                <p> X 轴坐标：<span id="x"></span></p>
                <p> Y 轴坐标：<span id="y"></span></p>
                <div className="jtk-demo-header">
                    <div className="window" id="moveCreateDiv"><strong>hello wrold</strong></div>
                </div>
                <div className="jtk-demo-main">
                    <div className="jtk-demo-canvas canvas-wide flowchart-demo jtk-surface jtk-surface-nopan"
                         id="canvas">
                        {
                            console.log(this.props.list)
                        }
                        {
                            this.props.list ? this.props.list.map(i => {
                                return <div key={i} className="window jtk-node" id={`flowchartWindow${i}`}
                                            style={window_style6}>
                                    <strong>{i}</strong><br/><br/></div>
                            }) : null
                        }
                        {/*<div className="window jtk-node" id="flowchartWindow1" style={window_style1}>*/}
                        {/*<strong>1</strong><br/><br/></div>*/}
                        {/*<div className="window jtk-node" id="flowchartWindow2" style={window_style2}>*/}
                        {/*<strong>2</strong><br/><br/></div>*/}
                        {/*<div className="window jtk-node" id="flowchartWindow3" style={window_style3}>*/}
                        {/*<strong>3</strong><br/><br/></div>*/}
                        {/*<div className="window jtk-node" id="flowchartWindow4" style={window_style4}>*/}
                        {/*<strong>4</strong><br/><br/></div>*/}
                        {/*<div className="window jtk-node" id="flowchartWindow5" style={window_style5}>*/}
                        {/*<strong>5</strong><br/><br/></div>*/}
                        {/*<div className="window jtk-node" id="flowchartWindow6" style={window_style6}>*/}
                        {/*<strong>6</strong><br/><br/></div>*/}
                    </div>
                </div>
                <h1 onClick={this.addClick}>das</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('flow').get('list')
    }
};
const mapActionCreators = {
    addOneList
};

export default connect(mapStateToProps, mapActionCreators)(JsPlumb);