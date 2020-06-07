const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")
const rename = require("gulp-rename");
gulp.task("sass:watch", () => watchSass([
  "./sass/**/*.{scss,css}",
  "!./public/libs/**/*"
])
  .pipe(sass())
  .pipe(rename("public/styles.css"))
  .pipe(gulp.dest("./")));