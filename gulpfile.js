const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const rename = require('gulp-rename');

gulp.task('styles', function () {
	return gulp.src('assets/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
    .pipe(cleanCSS())
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(gulp.dest('assets/css'))
  }
)
gulp.task('codes', function () {
	return gulp.src('assets/js/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(minify())
		.pipe(gulp.dest('assets/dist/'))
  }
)
gulp.task('build',  gulp.series('styles', 'codes'))