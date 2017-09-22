
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    clean: {
      dist: {
        src: ["dist"]
      }
    },

    copy: {
      index: {
        expand: true,
        flatten: true,
        src: "src/index.html",
        dest: "public"
      },
      images: {
        expand: true,
        cwd: "assets/images",
        src: "**",
        dest: "public/images"
      },
      files: {
        expand: true,
        cwd: "assets",
        src: ["files/**", "favicon.ico"],
        dest: "dist/files"
      }
    },

    sass: {
      assets: {
        expand: true,
        cwd: "assets/scss",
        src: ["core.scss"],
        dest: "dist",
        ext: ".css"
      }
    },

    cssmin: {
      css: {
        expand: true,
        src: ["dist/core.css"],
        ext: ".css"
      }
    },

    watch: {
      grunt: {
        files: "gruntfile.js",
        options: {
          reload: true
        }
      },
      html: {
        files: ["src/index.html"],
        tasks: ["copy:index"],
        options: {
          spawn: false
        }
      },
      sass: {
        files: ["assets/**/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false
        }
      },
      images: {
        files: "assets/images/**/*",
        tasks: ["copy:images"],
        options: {
          spawn: false
        }
      }
    }
  });

  //load grunt tasks
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-sass");

  grunt.registerTask("default", ["clean"]);
  grunt.registerTask("copy-assets", ["copy:index", "copy:images", "copy:files"]);
  grunt.registerTask("build:dev", ["clean", "copy-assets", "copy:server", "sass"]);
  grunt.registerTask("build:prod", ["clean:public", "copy-assets", "sass", "cssmin"]);
};
