const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const keys = {};

const deer = new Playable('assets/deer_sprite.png', 32, 32, [4, 4, 4, 6, 8, 3, 5], 146, 200);
const doe = new Companion('assets/doe_sprite.png', deer, 32, 32, [4, 4, 4, 6, 3, 5], 98, 200);
const doe2 = new Companion('assets/doe_sprite.png', doe, 32, 32, [4, 4, 4, 6, 3, 5], 50, 200);

deer.setRunningAnimation(1);
doe.setRunningAnimation(1);
doe2.setRunningAnimation(1);
doe.setSpeed(1.5);
doe2.setSpeed(1);

document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

let lastTime = 0;

function gameLoop(time) {
    const deltaTime = time - lastTime;
    lastTime = time;

    deer.handleInput(keys);
    deer.update(deltaTime);
    doe.update(deltaTime);
    doe2.update(deltaTime);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    deer.draw(ctx, 3);
    doe.draw(ctx, 3);
    doe2.draw(ctx, 3);

    requestAnimationFrame(gameLoop);
}

deer.sprite.onload = () => requestAnimationFrame(gameLoop);