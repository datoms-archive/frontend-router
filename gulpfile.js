//dependencies
const gulp = require('gulp'),
	babel = require('gulp-babel'),
	umd = require('gulp-umd'),
	rename = require('gulp-rename');

gulp.task('default', function() {
	gulp.src('./src/frontendRouter.js')
		.pipe(
			babel()
		)
		.pipe(
			umd()
		)
		.pipe(
			rename('index.js')
		)
		.pipe(
			gulp.dest('./')
		)
});
