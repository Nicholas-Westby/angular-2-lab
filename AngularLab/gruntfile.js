"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-run');
    grunt.initConfig({
        browserify: {
            default: {
                files: {
                    "scripts/browserify.compiled.js": ["scripts/browserify.js"]
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
                    "scripts/browserify.compiled.js",
                    "scripts/main.js",
                    "scripts/typescript-main.compiled.js",
                    "scripts/post-script.js"
                ],
                dest: "scripts/main.compiled.js"
            }
        },
        run: {
            typescript: {
                exec: "npm run tsc"
            }
        }
    });
    grunt.task.registerTask("default", ["browserify:default", "run:typescript", "concat:default"]);
};