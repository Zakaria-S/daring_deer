class Sprite {
    constructor(src, frameWidth = 32, frameHeight = 32, framesPerRow = [8]) {
        this.sprite = new Image();
        this.sprite.src = src;

        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.framesPerRow = framesPerRow;

        this.currentFrame = 0;
        this.elapsedTime = 0;
        this.frameDuration = 200;

        this.playing = true;

        this.frameStart = 0;
        this.frameEnd = this.framesPerRow.reduce((a, b) => a + b, 0) - 1;
        this.frameRow = 0;
        this.frameOffset = 0;
    }

    setAnimationRow(rowIndex) {
        let start = 0;
        for (let i = 0; i < rowIndex; i++) {
            start += this.framesPerRow[i];
        }
        const length = this.framesPerRow[rowIndex];
        this.frameStart = start;
        this.frameEnd = start + length - 1;
        this.frameRow = rowIndex;
        this.frameOffset = start;
        this.currentFrame = this.frameStart;
    }

    update(deltaTime) {
        if (!this.playing) return;

        this.elapsedTime += deltaTime;

        if (this.elapsedTime >= this.frameDuration) {
            this.currentFrame++;
            if (this.currentFrame > this.frameEnd) {
                this.currentFrame = this.frameStart;
            }
            this.elapsedTime = 0;
        }
    }

    draw(ctx, x, y, scale = 1) {
        const relativeFrame = this.currentFrame - this.frameOffset;
        const row = this.frameRow;
        const col = relativeFrame;
        
        ctx.drawImage(
            this.sprite,
            col * this.frameWidth, row * this.frameHeight,
            this.frameWidth, this.frameHeight,
            x, y,
            this.frameWidth * scale, this.frameHeight * scale
        );
    }
}