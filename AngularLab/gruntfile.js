"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.initConfig({
        browserify: {
            default: {
                files: {
                    "scripts/sample-output.js": ["scripts/sample-input.js"]
                }
            }
        },
        concat: {
            options: {
                separator: "\r\n"
            },
            default: {
                src: [
                    "scripts/pre-script.js",
                    "scripts/sample-output.js",
                    "scripts/main.js",
                    "scripts/post-script.js"
                ],
                dest: "scripts/main.compiled.js"
            }
        }
    });
    grunt.task.registerTask("default", ["browserify:default", "concat:default"]);
};