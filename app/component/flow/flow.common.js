/**
 * Created by easterCat on 2017/11/16.
 */
import jp from '../../plugins/jsplumb/jsplumb';

let jsPlumb = jp.jsPlumb;

let instance = jsPlumb.getInstance({
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


function _initFlow() {
// suspend drawing and initialise.
    instance.batch(function () {

        _addEndpoints("Window5", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
        _addEndpoints("Window4", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
        _addEndpoints("Window2", ["LeftMiddle", "BottomCenter"], ["TopCenter", "RightMiddle"]);
        _addEndpoints("Window3", ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
        _addEndpoints("Window1", ["LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter"]);

        // 将所有类名为window的对象设置为可拖动对象
        _addPointsDrag($(".flowchart-demo .window"));
        _addPointsDrag($(".jtk-demo-header .window"));


        // 连接两个点
        _addConnectLine(["Window2BottomCenter", "Window3TopCenter"]);
        _addConnectLine(["Window2LeftMiddle", "Window4LeftMiddle"]);
        _addConnectLine(["Window4TopCenter", "Window4RightMiddle"]);
        _addConnectLine(["Window3RightMiddle", "Window2RightMiddle"]);
        _addConnectLine(["Window4BottomCenter", "Window1TopCenter"]);
        _addConnectLine(["Window3BottomCenter", "Window1BottomCenter"]);


        //连接线的点击事件
        instance.bind("click", function (conn, originalEvent) {
            // if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
            //   instance.detach(conn);
            conn.toggleType("basic");
        });
        // listen for new connections; initialise them the same way we initialise the connections at startup.
        instance.bind("connection", function (connInfo, originalEvent) {
            init(connInfo.connection);
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
}

/**
 * 创建一个节点
 * @param toId 传入节点的id
 * @param sourceAnchors 创建源头节点
 * @param targetAnchors 创建目标节点
 * @private
 */
function _addEndpoints(toId, sourceAnchors, targetAnchors) {
    for (let i = 0; i < sourceAnchors.length; i++) {
        let sourceUUID = toId + sourceAnchors[i];
        instance.addEndpoint("flowchart" + toId, sourceEndpoint, {
            anchor: sourceAnchors[i],
            uuid: sourceUUID
        });
    }
    for (let j = 0; j < targetAnchors.length; j++) {
        let targetUUID = toId + targetAnchors[j];
        instance.addEndpoint("flowchart" + toId, targetEndpoint, {
            anchor: targetAnchors[j],
            uuid: targetUUID
        });
    }
}

/**
 * 给节点添加拖拽功能
 * @param selector  例如document.querySelectorAll(".jtk-demo-header .window")
 * @private
 */
function _addPointsDrag(selector) {
    instance.draggable(selector, {grid: [20, 20]});
};

/**
 * 创建节点之间的连接线
 * @param arr 例如["Window2BottomCenter", "Window3TopCenter"]
 * @private
 */
function _addConnectLine(arr) {
    instance.connect({uuids: arr, editable: true});
};

/**
 *
 */
function _mouseDragEvent(el, movecb) {
    let emitDiv = $(el);

    emitDiv.bind('mousemove', function () {
        mouseMove();
    });
    emitDiv.bind('mouseup', function () {
        movecb();
    });
    function mouseMove(ev) {
        ev = ev || window.event;
        let mousePos = mousePosition(ev);
        document.getElementById('x').innerHTML = mousePos.x;
        document.getElementById('y').innerHTML = mousePos.y;
    }

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
};

export const flow = {
    initFlow: _initFlow,
    addEndpoints: _addEndpoints,
    addPointsDrag: _addPointsDrag,
    addConnectLine: _addConnectLine,
    mouseDragEvent: _mouseDragEvent
};



