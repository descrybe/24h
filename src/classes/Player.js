class Player {
    constructor({ x, y, color }) {
        this._x = x;
        this._y = y;
        this._color = color;
    };

    drawNeedle(ctx) {
        ctx.beginPath();
        ctx.moveTo(106, 0);
        ctx.lineTo(103, 80);
        ctx.lineTo(100, 0);
        ctx.fillStyle = this._color;
        ctx.closePath();
        ctx.fill();
    };
};

export default Player;