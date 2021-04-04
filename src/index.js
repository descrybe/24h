// TODO: Сделать билд
import Player from './classes/Player';
import { spawnBalloons } from './BalloonFunctions';
import './styles.css';

const counterElement = document.getElementById('game-time');
const canvas = document.getElementById('game-wrapper');
const ctx = canvas.getContext('2d');
const balloons = [];
let counter = 60;

const needleParams = {
    x: canvas.clientWidth,
    y: 0,
    color: 'black'
};

const player = new Player(needleParams);

const setGameField = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    player.drawNeedle(ctx);
};

function animate() {
    requestAnimationFrame(animate);
    setGameField();
    balloons.forEach(ballon => {
        ballon.update();
    });
};

const timer = setInterval(() => {
    counter -= 1;
    counterElement.innerText = `Оставшееся время: ${counter}`;
    
    if (counter === 0) {
        clearInterval(timer);
    }
}, 1000);

spawnBalloons(balloons, canvas, ctx);
animate();