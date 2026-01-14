class Sylveon {
    constructor(game) {
        this.game = game;
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./sylveonSpriteSheet.png"), 0, 0, 63, 48, 4, .2);
        this.animator = new Animator(ASSET_MANAGER.getAsset("./LilySpriteSheet.png"), 0, 0, 230, 225, 4, .5);

    
        // this.x = 0;
        // this.y = 400;
        // this.speed = 85;

        this.x = 0;
        this.y = 300;
        this.speed = 90;
    
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 512) this.x = 0;

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}``