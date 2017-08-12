var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    open = require('open'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    imageMin = require('gulp-imagemin'),
    connect = require('gulp-connect'),
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
        .pipe(gulp.dest(app.prdPath))
        .pipe(connect.reload());
});

gulp.task('json',function(){
    gulp.src(app.srcPath+'data/**/*.json')
        .pipe(gulp.dest(app.devPath+'data'))
        .pipe(gulp.dest(app.prdPath+'data'))
        .pipe(connect.reload());
});

gulp.task('less',function(){
    gulp.src(app.srcPath+'styles/index.less')
        .pipe(less())
        .pipe(gulp.dest(app.devPath+'css'))
        .pipe(cssmin())
        .pipe(gulp.dest(app.prdPath+'css'))
        .pipe(connect.reload());
});

gulp.task('js',function(){
    gulp.src(app.srcPath+'script/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest(app.devPath+'js'))
        .pipe(uglify())
        .pipe(gulp.dest(app.prdPath+'js'))
        .pipe(connect.reload());
});

gulp.task('imageMin',function(){
    gulp.src(app.srcPath+'image/**/*')
        .pipe(gulp.dest(app.devPath+'image'))
        .pipe(imageMin())
        .pipe(gulp.dest(app.prdPath+'image'))
        .pipe(connect.reload());
});

gulp.task('build',['html','js','less','imageMin','json']);

gulp.task('clean',function(){
    gulp.src([app.devPath,app.prdPath])
        .pipe(clean());
});

gulp.task('server',['build'],function(){
    connect.server({
        root:'./',
        livereload:true,
        port:8089
    });
    open('http://localhost:8089');

    gulp.watch('bower_components/**/*.js',['lib']);
    gulp.watch(app.srcPath+'**/*.html',['html']);
    gulp.watch(app.srcPath+'styles/**/*.less',['less']);
    gulp.watch(app.srcPath+'script/**/*.js',['js']);
    gulp.watch(app.srcPath+'data/**/*.json',['json']);
    gulp.watch(app.srcPath+'image/**/*',['imageMin']);
});


gulp.task('default',['server']);