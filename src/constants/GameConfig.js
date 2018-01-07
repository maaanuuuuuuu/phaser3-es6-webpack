import BootScene from '../scenes/BootScene'
import GameScene from '../scenes/GameScene'

export const gameConfig = {
  type: Phaser.CANVAS,
  width: 480,
  height: 720,
  backgroundColor: '#626262',
  parent: 'gameContainer',
  scene: [BootScene, GameScene],
}
