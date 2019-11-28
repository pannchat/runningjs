const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('default',function(){
	gulp.src("es6/**/*.js")
		.pipe(babel())

		.pipe(gulp.dest("dist"))
		
		//브라우저 소스
	gulp.src("public/es6/**/*.js")
		.pipe(babel())

		.pipe(gulp.dest("public/dist"))
});
//gulp-babel 버전업그레이드로 인해 gulp-babel@8.0.0 설치하니까 진행된다.