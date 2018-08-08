export const firstLevel = {
  name: 'firstLevel',
  background: 'assets/sky.png',
  platforms: [
    {
      name: 'ground',
      texture: 'assets/platform.png',
      scale: 2,
      x: 400,
      y: 568
    },
    {
      name: 'ground',
      texture: 'assets/platform.png',
      x: 600,
      y: 400
    },{
      name: 'ground',
      texture: 'assets/platform.png',
      x: 50,
      y: 250
    },{
      name: 'ground',
      texture: 'assets/platform.png',
      x: 750,
      y: 220
    }
  ],
  objects: [{
    texture: 'assets/star.png',
    name: 'star',
    x: 120,
    y: 200,
    overlapPlayer: true
  }]
}
