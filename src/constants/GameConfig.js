import BootScene from '../scenes/BootScene'
import Phaser from 'phaser'

export const gameConfig = {
  type: Phaser.AUTO,
  width: 1400,
  height: 960,
  backgroundColor: '#626262',
  parent: 'gameContainer',
  scene: [BootScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
}
