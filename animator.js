class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;
        if (this.isDone()) this.elapsedTime -= this.totalTime;

        const frame = this.currentFrame();

        ctx.drawImage(this.spritesheet,
            this.xStart + this.width*frame, this.yStart,
            this.width, this.height,
            x, y,
            this.width * scale, this.height * scale)
    };

    moveBall(ctx, x, y, maxPower, scale = 1) {
        var power = 1
        var cooldown = 2
        while(power < maxPower) {
            cooldown -= gameEngine.clockTick
            console.log(cooldown)
            if(cooldown > 0){
                var startAngle =  Math.PI;
                var endAngle = Math.PI*2;
                
                
                var xStart = x+140
                var xRadius = 50*power;
                var yRadius = 50*power;

                xRadius += (power * 5);
                
                if(yRadius < 450) yRadius += (power * 10);

                xStart = 50*power + (power * 5);

                const frame = this.currentFrame();
                ctx.drawImage(this.spritesheet,
                    this.xStart + this.width*frame, this.yStart,
                    this.width, this.height,
                    x, y,
                    this.width * scale, this.height * scale)
                power += .06
            } else {
                cooldown = 2
            }
        }
    };


    drawArc(tick, context, x, y, power) {
        // if(3-power > 0){
            var startAngle =  Math.PI;
            var endAngle = Math.PI*2;
            
            
            var xStart = x+140
            var xRadius = 50*power;
            var yRadius = 50*power;

            xRadius += (power * 5);
            
            if(yRadius < 450) yRadius += (power * 10);

            xStart = 50*power + (power * 5);

            // Begin the path
            context.beginPath();

            // Draw the arc
            context.ellipse(xStart, y, xRadius, yRadius, 0, startAngle, endAngle);

            // Set the style of the arc
            context.lineWidth = 10;
            context.strokeStyle = "red";

            // Draw the arc to the canvas
            context.stroke();
            
        // }

    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};

