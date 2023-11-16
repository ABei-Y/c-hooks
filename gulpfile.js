const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const babel = require('gulp-babel')

gulp.task('clean', async function() {
  await del('es/**');
  await del('lib/**');
})

gulp.task('es', function() {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext'
  })
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'))
})

gulp.task('cjs', function() {
  return gulp
    .src(['./es/**/*.js'])
    .pipe(
      babel({
        configFile: '../../.babelrc'
      })
    ).pipe(gulp.dest('lib/'))
})


exports.default = gulp.series('clean', 'es', 'cjs')