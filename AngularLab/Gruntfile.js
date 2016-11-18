'use strict';

module.exports = function (grunt) {

    // Initialize Grunt tasks.
    grunt.initConfig({
        browserify: {
            prd: {
                files: {
                    'app.compiled.js': ['wwwroot/dist/main.js']
                }
            }
        },
        concat: {
            options: {
                separator: "\r\n"
            },
            prd: {
                // Can use "start-function.js" and "end-function.js" to wrap one of the
                // files to ensure it doesn't execute.
                src: [
                    "node_modules/reflect-metadata/Reflect.js",
                    //"start-function.js",
                    "app.compiled.js",
                    //"end-function.js",
                    "main.js"],
                dest: "main.compiled.js"
            }
        }
    });

    // Load Grunt tasks.
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-concat");

    // Register Grunt tasks.
    //grunt.task.registerTask('prd', ['browserify:prd', 'concat:prd']);
    grunt.task.registerTask('prd', ['concat:prd']);

};