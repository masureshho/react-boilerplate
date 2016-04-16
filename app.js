var gulp = require( './gulptasks' );

gulp.tasks.scripts.fn();
gulp.tasks.styles.fn();
require("babel-register");

require('./server/server')();