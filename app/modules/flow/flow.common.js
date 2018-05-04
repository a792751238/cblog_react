/**
 * Created by easterCat on 2017/11/16.
 */
import jp from '../../plugins/jsplumb/jsplumb';
import "jquery-ui/ui/widgets/draggable";

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
        // ["Label", {
        //     location: 0.1,
        //     id: "label",
        //     cssClass: "aLabel",
        //     events: {
        //         tap: function () {
        //             alert("hey");
        //         }
        //     }
        // }]
    ],
    //设置容器
    Container: "canvas"
});

let basicType = {
    connector: "StateMachine",
    paintStyle: {stroke: "red", strokeWidth: 4},
    hoverPaintStyle: {stroke: "blue"},
    overlays: [
        "Arrow"
    ]
};
instance.registerConnectionType("basic", basicType);

// 这里是连接线的两个点的样式
let connectorPaintStyle = {
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
    //源点样式设置
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


function _initFlow(inincb) {
    // suspend drawing and initialise.
    instance.batch(function () {
        inincb();

        // 将所有类名为window的对象设置为可拖动对象
        flow.addPointsDrag($(".flowchart-demo .window"));


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
    if (sourceAnchors && sourceAnchors.length > 0) {
        for (let i = 0; i < sourceAnchors.length; i++) {
            let sourceUUID = toId + sourceAnchors[i];
            instance.addEndpoint("flowchart" + toId, sourceEndpoint, {
                anchor: sourceAnchors[i],
                uuid: sourceUUID
            });
        }
    }

    if (targetAnchors && targetAnchors.length > 0) {
        for (let j = 0; j < targetAnchors.length; j++) {
            let targetUUID = toId + targetAnchors[j];
            instance.addEndpoint("flowchart" + toId, targetEndpoint, {
                anchor: targetAnchors[j],
                uuid: targetUUID
            });
        }
    }
}

/**
 * 给节点添加拖拽功能
 * @param selector  例如document.querySelectorAll(".jtk-demo-header .window")
 * @private
 */
function _addPointsDrag(selector) {
    instance.draggable(selector, {grid: [20, 20]});
}

/**
 * 创建节点之间的连接线
 * @param arr 例如["Window2BottomCenter", "Window3TopCenter"]
 * @private
 */
function _addConnectLine(arr) {
    instance.connect({uuids: arr, editable: true});
}

/**
 * 获取鼠标移动的坐标
 * @param el
 * @param movecb 鼠标移动结束的回调
 * @private
 */
function _mouseDragEvent(el, movecb) {
    let offset;
    let wh;

    $(el).draggable({
        helper: "clone",
        containment: ".layui-layout",//设置拖动的范围
        scroll: false,
        cursor: "pointer",//设置拖动光标总是在中心
        cursorAt: {top: 30, left: 60},
        start: function (ev) {
            wh = {
                w: $(this).width() / 2,
                h: $(this).height() / 2
            }
        },
        drag: function (ev) {
            offset = $(this).offset();

        },
        stop: function (ev) {
            console.log('鼠标的位置', {top: ev.clientY, left: ev.clientX});
            console.log('拖放元素的位置', {top: offset.top, left: offset.left});
            let pos = {x: ev.clientX - offset.left - wh.w - 9, y: ev.clientY - offset.top - wh.h - 100 - 8};
            movecb(pos)
        }
    });
}

export const flow = {
    initFlow: _initFlow,
    addEndpoints: _addEndpoints,
    addPointsDrag: _addPointsDrag,
    addConnectLine: _addConnectLine,
    mouseDragEvent: _mouseDragEvent
};



