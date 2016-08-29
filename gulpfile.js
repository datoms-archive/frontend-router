//Dependencies
var gulp = require('gulp'),
	util = require('gulp-util'),
	babel = require("gulp-babel"),
	concat = require("gulp-concat");

//Source files
var js_sources = [
		'./src/frontendRouter.js'
	],
	js_dest = './dist/';

//prepare prod js
gulp.task('prepare_js', function() {
	gulp.src(js_sources)
		.pipe(
			babel()
		)
		.pipe(
			concat('frontendRouter.min.js')
		)
		.pipe(
			gulp.dest(js_dest)
		)
});

gulp.task('default', ['prepare_js']);
