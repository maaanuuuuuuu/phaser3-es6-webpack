import BootScene from '../scenes/BootScene'
import GameScene from '../scenes/GameScene'
import Phaser from 'phaser'

export const gameConfig = {
  type: Phaser.AUTO,
  width: 540,
  height: 960,
  backgroundColor: '#626262',
  parent: 'gameContainer',
  scene: [BootScene, GameScene],
}
