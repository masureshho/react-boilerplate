'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var envify = require( 'envify' );
var source = require( 'vinyl-source-stream' );
var buffer = require( 'vinyl-buffer' );
var babelify = require('babelify');
gulp.task('scripts', function () {
    var bro = browserify({
        entries: 'app/browser.js',
        debug: true,
        transform: [ 'reactify' ]
    });
    
    bro.on( 'error', function( error ){
        console.log( error.message );
        this.emit( 'end' );
    });
    var transform = bro.transform('babelify', {presets: ['es2015', 'react']})
    var stream = transform.bundle()   
        .pipe(
            envify({
                global: true,
                _: 'purge'
            }),
            {
                global: true
            }
        )
        .pipe(source('bundle.js'))
        .pipe(buffer());
    
    if( process.env.NODE_ENV === 'production' ){
        stream
            .pipe(uglify({
                source_map: true
            }));
    }
    
    stream
        .pipe(gulp.dest('./dist/scripts/'))
        .on('error', function(error){
            console.log(error);
        });

});

gulp.task('styles', function () {

    gulp.src(['app/view-components/**/*.css', 'app/global-styles/**/*.css'])
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});


gulp.task('default', ['scripts', 'styles']);

module.exports = gulp;
