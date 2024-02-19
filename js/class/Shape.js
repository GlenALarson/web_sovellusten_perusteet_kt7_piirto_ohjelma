export class Shape {
    _x
    _y
    _lineWidth
    _color

    constructor(x,y,_lineWidth = 1,color) {
        this._x = x
        this._y = y
        this._lineWidth = _lineWidth
        this._color = color
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    set setColor(color) {
        this._color = color
    }
}