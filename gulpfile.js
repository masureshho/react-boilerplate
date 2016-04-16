'use strict';

var gulp = require( './gulptasks' );

gulp.watch([ 'app/**/*.js'], ['scripts']);
gulp.watch(['app/**/*.css'], ['styles']);
