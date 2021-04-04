import Balloon from './classes/Ballon';

export function spawnBalloons(ballonsArray, canvas, ctx) {
    let randomColor, initialRadius, initialX;
    const colors = ['red', 'blue', 'orange', 'green', 'yellow', 'aquamarine', 'tan'];
    const spawnInterval = 1000;
    const initialY = canvas.clientHeight;

    setInterval(() => {
        randomColor = colors[Math.round(Math.random()*7.2)];
        initialRadius = Math.round(Math.random() * 30) + 15;    
        initialX = Math.floor(Math.random() * canvas.clientWidth);

        const velocity = {
            x: 0, 
            y: -2
        };

        ballonsArray.push(
            new Balloon(ctx, initialX , initialY, 
                initialRadius, randomColor, velocity)
        );
    }, spawnInterval);
};

export function animate(balloons, canvas, ctx, player) {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    player.drawNeedle(ctx);

    balloons.forEach(ballon => {
        ballon.update();
    });
};