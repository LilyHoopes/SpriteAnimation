class Sylveon {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sylveonSpriteSheet.png"), 0, 0, 63, 48, 4, .2);
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./LilySpriteSheet.png"), 0, 0, 246, 231, 4, .2);

    
        this.x = 0;
        this.y = 400;
        this.speed = 85;
    
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 512) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}``