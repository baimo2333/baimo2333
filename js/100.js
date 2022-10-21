// 鼠标位置

let body = document.body;
var mouse_X, mouse_Y;
body.onmousemove = function (event) {
    var event = event || window.event; //标准化事件对象 
    if (event.offsetX || event.offsetY) {
        mouse_X = event.offsetX;
        mouse_Y = event.offsetY;
    }
    else if (event.layerX || event.layerY) {
        mouse_X = event.layerX;
        mouse_Y = event.layerY;
    }
}