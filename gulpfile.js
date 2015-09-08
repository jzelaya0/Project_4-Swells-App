//gulpfile.js
var gulp    = require('gulp');
var minify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var jshint  = require('gulp-jshint');

gulp.task('minify', function(){
  //Grab all javascript files
  gulp.src('./front-end/javascripts/*.js')
  //minify all javascripts
  .pipe(minify())
  //send the javascript files to a desntination
  .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function(){
  //checks for any changes in javascript files in this folder
  gulp.watch(['./front-end/javascripts/*.js'], ['minify']);
});


gulp.task('concat', function(){
  //specify order of javascript files to be concatinated
  gulp.src(['./front-end/first.js','./front-end/second.js'])
  //where to concatinate your files
  .pipe(concat('application.js'))
  //Uglify file
  .pipe(minify())
  //Send them to javascripts in public folder
  .pipe(gulp.dest('./public/javascripts'));
});


gulp.task('jshint',function(){
  gulp.src('./front-end/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('default', ['jshint','concat','watch']);
