/**
 * Sample gulpfile implementing gulp-publish task
 * @author juanvallejo
 */

var gulp = require('gulp');

gulp.task('publish', function() {

	var commitMessage = process.argv[3] == '-m' && process.argv[4] ? process.argv[4] : null;

	if(!commitMessage) {
		console.error('ERROR', 'A commit message must be provided.');
		return process.exit(1);
	}

	var exec = require('child_process').exec;

	exec('./publish "' + commitMessage + '"', function(err, stdout, stderr) {

		if(err) {
			console.error('ERROR', err);
			return process.exit(1);
		}

		console.log(stdout.toString());

	});

});