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
        },
        concat: {
            options: {
                separator: "\r\n"
            },
            prd: {
                src: ["app.compiled.js", "main.js"],
                dest: "main.compiled.js"
            }
        }
    });

    // Load Grunt tasks.
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-concat");

    // Register Grunt tasks.
    grunt.task.registerTask('prd', ['browserify:prd', 'concat:prd']);

};