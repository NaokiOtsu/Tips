module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-webpack");
    grunt.initConfig({
        webpack: {
            options: {
                // configuration for all builds
            },
            build: {
                // configuration for this build
            }
        },
        "webpack-dev-server": {
            options: {
                webpack: {
                    // configuration for all builds
                },
                // server and middleware options for all builds
            },
            start: {
                webpack: {
                    // configuration for this build
                },
                // server and middleware options for this build
            }
        }
    });
};