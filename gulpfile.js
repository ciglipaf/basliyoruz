var gulp = require("gulp");
var exec = require('child_process').exec;

gulp.task("ciglipaf", function(cp) {
  exec("ls -la", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cp(err);
  })
})


gulp.task("default", ["ciglipaf"]);
