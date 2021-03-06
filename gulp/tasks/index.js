'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var minifyHTML = require('gulp-minify-html');

module.exports = gulp.task('index', function () {
    return gulp.src(config.paths.src.index)
        .pipe(gulpif(release, minifyHTML({comments: true, empty: true, spare: true, quotes: true})))
        .pipe(gulpif(release,
            replace('<!--styles-->', '<link href="' + config.filenames.release.styles + '" rel="stylesheet">'),
            replace('<!--styles-->', '<link href="' + config.filenames.build.styles + '" rel="stylesheet">')
        ))
        .pipe(gulpif(release,
            replace('<!--bowerStyles-->', '<link href="' + config.filenames.release.bowerStyles + '" rel="stylesheet">'),
            replace('<!--bowerStyles-->', '<link href="' + config.filenames.build.bowerStyles + '" rel="stylesheet">')
        ))
        .pipe(gulpif(release,
            replace('<!--scripts-->', '<script src="' + config.filenames.release.scripts + '"></script>'),
            replace('<!--scripts-->', '<script src="' + config.filenames.build.scripts + '"></script>')
        ))
        .pipe(gulpif(release,
            replace('<!--config-->', '<script src="' + config.filenames.release.config + '"></script>'),
            replace('<!--config-->', '<script src="' + config.filenames.build.config + '"></script>')
        ))
        .pipe(gulpif(release,
            gulp.dest(config.paths.dest.release.index),
            gulp.dest(config.paths.dest.build.index)));
});
