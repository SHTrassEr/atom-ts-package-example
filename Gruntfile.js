module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ts');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: ['build/*']
      },
      lib: {
        src: ['lib/*']
      },
    },
    ts: {
        lib: {
            src: ['src/lib/**/*.ts'],
            outDir: 'build/',
            options: {
                target: 'es3',
                module: 'commonjs',
                sourceMaps: true,
                declaration: true,
                removeComments: false
            }
        }
    },
    copy: {
      lib: {
        files: [
        { expand: true, cwd: "build/", src: "**", dest: "lib/" }
        ]
      }
    },
    watch: {
        lib: {
            files: ['src/**/*.ts', '!src/**/*.d.ts'],
            tasks: ['default']
        }
    }
  });

  grunt.registerTask('default', ['clean:build', 'ts:lib', 'clean:lib', 'copy:lib']);
}
