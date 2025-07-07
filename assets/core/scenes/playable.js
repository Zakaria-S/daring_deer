class Playable extends Character {
    constructor(src, frameWidth = 32, frameHeight = 32, framesPerRow = [8], x = 0, y = 0) {
        super(src, frameWidth, frameHeight, framesPerRow, x, y);
    }

    handleInput(keys) {
        if (keys['ArrowRight']) {
            this.vx = this.speed;
            this.facing = 1;
            
            if (this.status !== 'run') {
                this.setAnimationRow(this.runRowIndex);
                this.status = 'run';
                this.playing = true;
                this.frameDuration = 100;
            }
        } else if (keys['ArrowLeft']) {
            this.vx = -this.speed;
            this.facing = -1;
            if (this.status !== 'run') {
                this.setAnimationRow(this.runRowIndex);
                this.status = 'run';
                this.playing = true;
                this.frameDuration = 100;
            }
        } else if (keys['c']) {
            this.vx = 0;
            if (this.status !== 'attack') {
                this.setAnimationRow(this.attackRowIndex);
                this.status = 'attack';
                this.playing = true;
                this.frameDuration = 70;
            }
        } else {
            this.vx = 0;
            if (this.status !== 'idle') {
                this.setAnimationRow(this.idleRowIndex);
                this.status = 'idle';
                this.playing = true;
                this.frameDuration = 200;
            }
        }
    }
}