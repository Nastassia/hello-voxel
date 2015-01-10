grunt.loadNpmTasks('grunt-heroku-deploy');

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-heroku-deploy');
	grunt.registerTask('heroku:production', 'npm start');

};

