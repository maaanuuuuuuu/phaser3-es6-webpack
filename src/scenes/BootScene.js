import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('boot')
  }

  preload = () => {
    this.load.image('mushroom', 'assets/mushroom.png')
  }

  create = () => {
    this.mushroom = this.add.sprite(100, 100, 'mushroom')
  }

  update = () => {
    this.mushroom.angle++
  }
}
