export default class Level {
  constructor (scene, instance) {
    this.scene = scene
    this.instance = instance
    this.init()
  }
  
  init = () => {
    let scene = this.scene
    
    // load background image
    scene.load.image('background', this.instance.background)
    // load object images
    for (let i = 0; i < this.instance.objects.length; i++) {
      const object = this.instance.objects[i]
      scene.load.image(object.name, object.texture)
    }
    // load platform images
    for (let i = 0; i < this.instance.platforms.length; i++) {
      const platform = this.instance.platforms[i]
      scene.load.image(platform.name, platform.texture)
    }
  }

  initImages = () => {
    // add background image
    let scene = this.scene
    scene.add.image(400, 300, 'background') // position of the middle center of the image
    // scene.add.image(400, 300, 'star')
  }

  initPhysics = () => {
    // init plaforms
    let scene = this.scene
    scene.platforms = scene.physics.add.staticGroup()
    for (let i = 0; i < this.instance.platforms.length; i++) {
      let platform = scene.platforms.create(this.instance.platforms[i].x, this.instance.platforms[i].y, this.instance.platforms[i].name)
      if (this.instance.platforms[i].scale !== undefined) {
        platform.setScale(this.instance.platforms[i].scale).refreshBody()
      }
    }
    // init collectibles
  }

  initObjects = () => {
    let scene = this.scene

    let objects = scene.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });
    
    // object bounces
    objects.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    // objects won't go through floods
    scene.physics.add.collider(objects, scene.platforms);
    //objects can be collected
    return objects
    // scene.physics.add.overlap(player, objects, function  (player, star) {
    //   star.disableBody(true, true)
    // }, null, scene)
  }

  addCollider = (collider) => {
    let scene = this.scene
    scene.physics.add.collider(collider, scene.platforms);
  }
}