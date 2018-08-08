export default class Character {
  constructor (scene, instance) {
    this.scene = scene
    this.name = instance.name
    this.file = instance.file
    this.frameHeight = instance.frameHeight
    this.frameWidth = instance.frameWidth
    this.sprite = null

    this.init()
  }
  init = function () {
    this.scene.load.spritesheet(this.name,
      this.file,
      { frameWidth: this.frameWidth, frameHeight: this.frameHeight }
    )
  }

  initPhysics = function (posX, posY) {
    this.sprite = this.scene.physics.add.sprite(posX, posY, this.name)
    this.sprite.setBounce(0.2)
    this.sprite.setCollideWorldBounds(true)

    return this.sprite
  }

  initAnimations = function () {
    let scene = this.scene
    scene.anims.create({
      key: 'left',
      frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    
    scene.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
    });
    
    scene.anims.create({
      key: 'right',
      frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }

  initMoves = function () {
    let sprite = this.sprite
    let keys = this.scene.keys
    if (keys.left.isDown) {
      sprite.setVelocityX(-160);

      sprite.anims.play('left', true);
    } else if (keys.right.isDown) {
      sprite.setVelocityX(160);

      sprite.anims.play('right', true);
    } else {
      sprite.setVelocityX(0);
      sprite.anims.play('turn');
    }
    if (keys.up.isDown && sprite.body.touching.down) {
      sprite.setVelocityY(-330);
    }
  }
}
