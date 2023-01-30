// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class Sprite {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset('./assets/ball2.png'), 0, 0, 140, 140, 1, 1);

        this.x = 0;
        this.y = 500;
        this.speed = 100;
        this.switchDirectionX = false;
        this.switchDirectionY = false;

        this.powerTimer = 1;
    };


    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, .3)
        this.animator.drawArc(this.game.clockTick, ctx, this.x, this.y, this.powerTimer)
    };

    update(ctx) {
        if(gameEngine.mouseClicked) {
            this.powerTimer += .06
        } else {
            this.animator.moveBall(ctx, this.x, this.y, this.powerTimer)
            this.powerTimer = 1;
        }
    };


};
