import { Rectangle } from "./Rectangle.js"

export class Square extends Rectangle {

    constructor(x,y,x2) {
        super(x,y,x2)
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x,this._y,this._x2,this._x2)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.stroke()
    }
}