class Companion extends Character {
    constructor(src, following, frameWidth = 32, frameHeight = 32, framesPerRow = [8], x = 0, y = 0) {
        super(src, frameWidth, frameHeight, framesPerRow, x, y);
        this.following = following;
    }

    update(deltaTime) {
        if (Math.abs(this.following.x - this.x) > (this.frameWidth + this.following.frameWidth)) {
            let sign = ((this.following.x - this.x) < 0) ? -1 : 1;
            this.vx = sign * this.speed;
            this.facing = sign;

            if (this.status !== 'run') {
                this.status = 'run';
                this.setAnimationRow(this.runRowIndex);
                this.frameDuration = 100;
            }
        } else {
            if (this.status !== 'idle') {
                this.status = 'idle';
                this.setAnimationRow(this.runRowIndex);
                this.frameDuration = 200;
            }
        }

        super.update(deltaTime);
    }
}