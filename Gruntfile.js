module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},

			ngActivityIndicator: {
				files: {
					'ngActivityIndicator.min.js': ['ngActivityIndicator.js']
				}
			}
		},

		jshint: {
			options: {
				ignores: ['ngActivityIndicator.min.js']
			},

			files: ['*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['jshint', 'uglify']);
};
