import { SCENE_GAME } from '../constants/Constants'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super(SCENE_GAME)
  }

  create () {
    this.mushroom = this.add.sprite(
      this.game.config.width / 2,
      this.game.config.height / 2,
      'mushroom'
    )
  }

  update () {
    this.mushroom.angle++
  }
}
