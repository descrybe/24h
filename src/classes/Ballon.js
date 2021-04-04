class Balloon {
    constructor(ctx, x, y, radius, color, velocity) {
        this.ctx = ctx;
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
        this._velocity = velocity;
    };

    drawBall() {
        this.ctx.fillStyle = this._color;

        this.ctx.beginPath();
        this.ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2, false);
        this.ctx.fill();
    };

    update() {
        this.drawBall();
        this._x = this._x + this._velocity.x;
        this._y = this._y + this._velocity.y;
    }
};

export default Balloon;