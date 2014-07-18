"use strict";

module.exports.init = function (app, middleware, controllers) {
    app.get('/ulogout', function (req, res) {
        if (req.user && parseInt(req.user.uid, 10) > 0) {
            var ws = require('./../../src/socket.io');
            ws.logoutUser(req.user.uid);
            req.logout();
        }
        res.redirect('/');
    });
};
