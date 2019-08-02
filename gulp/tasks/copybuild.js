copyPath = {
    "input": "./build/**",
    "output": ""
};

module.exports = function () {
    $.gulp.task('copybuild', () => {
        return (copyPath.output === "") ? $.gulp.src(copyPath.input) :
            $.gulp.src(copyPath.input)
            .pipe($.gulp.dest(copyPath.output));
    });
};