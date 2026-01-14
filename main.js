const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sylveonSpriteSheet.png")
//ASSET_MANAGER.queueDownload("./LilySpriteSheet.png")


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

    gameEngine.addEntity(new Sylveon(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});