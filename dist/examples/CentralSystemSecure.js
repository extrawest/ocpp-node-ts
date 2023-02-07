"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var src_1 = require("../src/");
var cs = new src_1.OcppServer();
cs.on('connection', function (client) {
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
cs.on('authorization', function (cbId, req, cb) {
    console.log('authorization', cbId, req.headers.authorization);
    // validate authorization header
    // cb(new Error('Unathorized')); // Deny
    cb(); // Accept
});
cs.listen(9220, {
    cert: fs_1.default.readFileSync('cert.pem'),
    key: fs_1.default.readFileSync('key.pem'),
});
