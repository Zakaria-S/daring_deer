class Character extends Sprite {
    constructor(src, frameWidth = 32, frameHeight = 32, framesPerRow = [8], x = 0, y = 0) {
        super(src, frameWidth, frameHeight, framesPerRow);
        this.x = x;
        this.y = y;

        this.speed = 2;
        this.vx = 0;
        this.vy = 0;
        this.facing = 1;

        this.idleRowIndex = 0;
        this.runRowIndex = 1;
        this.attackRowIndex = 4;

        this.status = 'idle'
    }

    setRunningAnimation(rowIndex) {
        this.runRowIndex = rowIndex;
    }

    setIdleAnimation(rowIndex) {
        this.idleRowIndex = rowIndex;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    update(deltaTime) {
        super.update(deltaTime);
        this.x += this.vx;
    }

    draw(ctx, scale = 1) {
        ctx.save();

        if (this.facing === -1) {
            ctx.translate(this.x + this.frameWidth * scale, this.y);
            ctx.scale(-1, 1);
        } else {
            ctx.translate(this.x, this.y);
        }

        super.draw(ctx, 0, 0, scale);

        ctx.restore();
    }
}