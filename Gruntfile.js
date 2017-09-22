module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      assets: {
        expand: true,
        cwd: "scss",
        src: ["core.scss"],
        dest: "css/main",
        ext: ".css"
      }
    },

    watch: {
      sass: {
        files: ["scss/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false
        }
      },
    }
  });

  //load grunt tasks
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-sass");

  //register grunt default task
  grunt.registerTask("default", ["sass"]);
};
