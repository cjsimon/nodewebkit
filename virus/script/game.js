// Game initialization
var game = new Phaser.Game(
	"100", "100", Phaser.CANVAS, 'Virus',
	{ preload: preload, create: create, update: update },
	true, false
);

// Global assets
// The virus sprite
var sprite;
// Sounds
var hit;

function preload() {
	// Remain active even when out of focus
	game.stage.disableVisibilityChange = true;
	
	// 64x64 sized frames
	// 18 frames
	game.load.spritesheet('virus', '/images/sprite.png', 64, 64, 64);
	game.load.audio('hit', '/sounds/hit.ogg');
}

function create() {
	game.stage.backgroundColor = 'rgba(68, 136, 170, 255)';
	
	// Setup Audio
	hit = game.add.audio('hit');
	
	// Setup Sprites
	sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'virus');
	sprite.anchor.setTo(0.5, 0.5);
	
	sprite.inputEnabled = true;
	sprite.input.useHandCursor = true;
	sprite.events.onInputDown.add(onPress, this);
	
	// Play walk at 100 speed and loop
	sprite.animations.add('walk');
	sprite.animations.play('walk', 65, true);
}

function onPress(sprite, pointer) {
	alert('clicked');
	hit.play();
	sprite.alpha(0.5);
	location.reload();
}

function loadUpdate() {
	
}

function update() {
	
}
