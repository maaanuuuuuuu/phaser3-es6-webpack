import Phaser from 'phaser'
import Character from '../objects/Character'
import { dude } from '../instances/characters/dude.js'
import { firstLevel } from '../instances/levels/firstLevel.js'
import Level from '../objects/Level'

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('boot')
  }
  player = null 
  level = null
  objects = []
  keys = null

  preload = () => {
    this.level = new Level(this, firstLevel)
    this.player = new Character(this, dude)
  }

  create = () => {
    let level = this.level
    let player = this.player
    let objects = this.objects

    level.initImages()
    level.initPhysics()
    objects = level.initObjects()

    player.initPhysics(100, 450)
    player.initAnimations()

    level.addCollider(player.sprite)

    this.physics.add.overlap(player.sprite, objects, function  (player, star) {
      star.disableBody(true, true)
    }, null, this)

  // https://phaser.io/tutorials/making-your-first-phaser-3-game/part9

  // ensuite tout cleaner pour faire une architecture propre pour un framework de plaformer

  }

  update = () => {
    this.keys = this.input.keyboard.createCursorKeys()
    this.player.initMoves()
  }
}
