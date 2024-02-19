import { Shape } from "./Shape.js"

export class Rectangle extends Shape {
    _x2
    _y2

    constructor(x,y,x2,y2) {
        super(x,y)
        this._x2 = x2
        this._y2 = y2
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x,this._y,this._x2,this._y2)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.stroke()
    }
}