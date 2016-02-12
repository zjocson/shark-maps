module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            shark_maps: {
                port: 9999,
                base: 'app'
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('default', 'connect:shark_maps');

};
