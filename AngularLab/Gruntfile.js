'use strict';

module.exports = function (grunt) {

    // Initialize Grunt tasks.
    grunt.initConfig({
        browserify: {
            prd: {
                files: {
                    'app.compiled.js': ['app/main.js']
                }
            }
        }
    });

    // Load Grunt tasks.
    grunt.loadNpmTasks("grunt-browserify");

    // Register Grunt tasks.
    grunt.task.registerTask('prd', ['browserify:prd']);

};