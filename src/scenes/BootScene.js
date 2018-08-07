import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('boot')
  }
  
  preload = () => {
    this.load.image('mushroom', 'assets/mushroom.png')
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude',
      'assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    )
  }

  create = () => {
    this.add.image(400, 300, 'sky') // position of the middle center of the image
    this.platforms = this.physics.add.staticGroup();
    
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
    
    this.player = this.physics.add.sprite(100, 450, 'dude');
    
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    
    this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
    });
    
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.physics.add.collider(this.player, this.platforms);

    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });
    
    this.stars.children.iterate(function (child) {
    
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
    });

    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.overlap(this.player, this.stars, function  (player, star)
    {
        star.disableBody(true, true);
    }
    , null, this);



  // https://phaser.io/tutorials/making-your-first-phaser-3-game/part9

  }

  update = () => {
    let cursors = this.input.keyboard.createCursorKeys();
    let player = this.player
    if (cursors.left.isDown) {
      player.setVelocityX(-160);

      player.anims.play('left', true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);

      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330);
    }
  }
}
