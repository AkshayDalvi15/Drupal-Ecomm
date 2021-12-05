const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const jshint = require("gulp-jshint");
function style() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./style/css"));
}
function watch() {
  gulp.watch("./src/scss/**/*.scss", style);
}
function hint() {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(jshint())
    .pipe(gulp.dest("./style/js"))
    .pipe(jshint.reporter("jshint-stylish"));
}
exports.style = style;
exports.watch = watch;
exports.hint = hint;