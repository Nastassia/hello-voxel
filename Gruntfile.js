grunt.loadNpmTasks('grunt-heroku-deploy');

module.exports = function(grunt) {
	grunt.initConfig({
		run: {
			'beefy mygame.js:game.js'
		}


	})

	grunt.loadNpmTasks('grunt-heroku-deploy');
	grunt.registerTask('default', ['run']);
};

