var express = require('express');
var path = require('path');
var app = express();

var routes = require('./routes/index');
// var girl = require('./routes/girl');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'app')));

app.use('/', routes);
// app.use('/girl', girl);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  // debug('Express server listening on port ' + server.address().port);
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;