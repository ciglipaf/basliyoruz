var gulp = require("gulp");

gulp.task("ciglipaf", function(cp) {
  exec("npm test", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cp(err);
  })
})


gulp.task("default", ["ciglipaf"]);
