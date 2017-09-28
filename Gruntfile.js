
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    clean: {
      dist: {
        src: ["dist"]
      }
    },

    copy: {
      html: {
        expand: true,
        cwd: "src",
        flatten: true,
        src: ["index.html", "404.html"],
        dest: "dist"
      },
      images: {
        expand: true,
        cwd: "assets/images",
        src: "**",
        dest: "dist/images"
      },
      files: {
        expand: true,
        flatten: true,
        cwd: "assets",
        src: ["files/**", "favicon.ico"],
        dest: "dist"
      },
      metadata: {
        expand: true,
        src: [".nojekyll", "CNAME"],
        dest: "dist"
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
        files: ["src/*.html"],
        tasks: ["copy:html"],
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
  grunt.registerTask("build", ["clean", "copy", "sass"]);
};
