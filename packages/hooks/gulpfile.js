const commonConfig = require('../../gulpfile'); // 获取根目录的gulpfile
const gulp = require('gulp')

exports.default = gulp.series(commonConfig.default);
