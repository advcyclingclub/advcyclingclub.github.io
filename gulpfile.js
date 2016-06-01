'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass');
	
	
var sassIn = 'build/**/*.scss';
var sassOut = 'stylesheets';	

gulp.task('default', ['sass'], function() {
	gulp.watch(sassIn, ['sass']);
});

gulp.task('sass', function () {
  gulp.src(sassIn)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassOut));
});

