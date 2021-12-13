'use strict'

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
	svgSprite = require('gulp-svg-sprite'),
    htmlmin = require('gulp-htmlmin')

gulp.task('clean', () => {
    del.sync('docs')
})

gulp.task('css', () => {
	gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions', '> 1%'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('docs/css'))
})

gulp.task('js', () => {
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(rename({basename: 'main', suffix: '.min', extname: '.js'}))
		.pipe(gulp.dest('docs/js'))
})

gulp.task('images', () => {
	gulp.src('src/img/*')
	//.pipe(imagemin())
	.pipe(gulp.dest('docs/img'))
})

gulp.task('svgSprite', () => {
	gulp.src('src/img/*.svg')
	.pipe(svgSprite({
		mode: {
			stack: {
				sprite: "../icons/icons.svg",
				example: true
			}
		}
	}))
	.pipe(gulp.dest('docs/img'))
})

gulp.task('html', () => {
	gulp.src('src/index.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('docs'))
})

gulp.task('default', ['clean', 'css', 'js', 'images', 'svgSprite', 'html'])