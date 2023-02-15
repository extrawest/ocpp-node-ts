"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var centralSystemSimple = new src_1.OcppServer();
centralSystemSimple.listen(9220);
centralSystemSimple.on('connection', function (client) {
    console.log("Client ".concat(client.getCpId(), " connected"));
    client.on('close', function (code, reason) {
        console.log("Client ".concat(client.getCpId(), " closed connection"), code, reason.toString());
    });
    client.on('BootNotification', function (request, cb) {
        var response = {
            status: 'Accepted',
            currentTime: new Date().toISOString(),
            interval: 60,
        };
        cb(response);
    });
});
