var createGame = require('voxel-hello-world')
var voxel = require('voxel')
// var createTerrain = require('voxel-perlin-terrain')

var game = createGame({
	// texturePath: './textures/',
	// materials: [['grass', 'dirt', 'grass_dirt'], 'brick', 'dirt'],
	// materialFlatColor: false,
	// worldOrigin: [0, 0, 0],
	// generate: function(x, y, z) {
 //    return y === 1 ? 1 : 0
 //  },
 texturePath: './textures/',
  //commenting this out to try voxel-perlin
  generate: function(x,y,z) {
    return x*x+y*y+z*z <= 15*15 ? 1 : 0 // sphere world
  },
  materials: [['grass', 'dirt', 'grass_dirt'], 'brick', 'dirt'],
  materialFlatColor: false,
  chunkSize: 32,
  chunkDistance: 2,
  worldOrigin: [0, 0, 0],
  controls: { discreteFire: false },
  lightsDisabled: false,
  fogDisabled: false,
  generateChunks: true,
  mesher: voxel.meshers.culled,
  playerHeight: 1.62

});

game.appendTo('#container');
