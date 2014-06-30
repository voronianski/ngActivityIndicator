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
				ignores: ['ngActivityIndicator.min.js'],
				jshintrc: true
			},

			files: ['*.js']
		},

		myth: {
			all: {
				files: { 'css/ngActivityIndicator.css': 'myth/index.css' }
			}
		},

		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},
			minify:{
				files: {
					'css/ngActivityIndicator.min.css': ['css/ngActivityIndicator.css'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-myth');
	grunt.registerTask('default', ['jshint', 'uglify', 'myth', 'cssmin']);
};
