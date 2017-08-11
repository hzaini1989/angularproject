var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    open = require('open'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    imageMin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');
var app = {
    srcPath:'src/',
    devPath:'build/',
    prdPath:'dist/'
}    
gulp.task('lib',function(){
    gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.devPath+'vendor'))
        .pipe(gulp.dest(app.prdPath+'vendor'));
});

gulp.task('html',function(){
    gulp.src(app.srcPath+'**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath));;
});

gulp.task('json',function(){
    gulp.src(app.srcPath+'data/**/*.json')
        .pipe(gulp.dest(app.devPath+'data'))
        .pipe(gulp.dest(app.prdPath+'data'));;
});

gulp.task('less',function(){
    gulp.src(app.srcPath+'styles/index.less')
        .pipe(less())
        .pipe(gulp.dest(app.devPath+'css'))
        .pipe(cssmin())
        .pipe(gulp.dest(app.prdPath+'css')); 
});

gulp.task('js',function(){
    gulp.src(app.srcPath+'script/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest(app.devPath+'js'))
        .pipe(uglify())
        .pipe(gulp.dest(app.prdPath+'js'));
});

gulp.task('imageMin',function(){
    gulp.src(app.srcPath+'image/**/*')
        .pipe(gulp.dest(app.devPath+'image'))
        .pipe(imageMin())
        .pipe(gulp.dest(app.prdPath+'image'));
});

gulp.task('bulid',['html','js','less','imageMin','json']);

gulp.task('clean',function(){
    gulp.src([app.devPath,app.prdPath])
        .pipe(clean());
});