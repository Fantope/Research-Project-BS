var brushWidth = 10;
var color = "#000000";
var drawingcanvas;

(function() {
  var $ = function(id){return document.getElementById(id)};

  drawingcanvas = this.__canvas = new fabric.Canvas('BigCanvas', {
    isDrawingMode: true
  });

  fabric.Object.prototype.transparentCorners = false;

  if (drawingcanvas.freeDrawingBrush) {
    drawingcanvas.freeDrawingBrush.color = color;
    drawingcanvas.freeDrawingBrush.width = brushWidth;
  }
})();