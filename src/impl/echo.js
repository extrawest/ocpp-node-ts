const WebSocket = require('ws');
const PORT = 3000;
const serverAddress = "ws://host.docker.internal:3000";
const wsServer = new WebSocket.Server({
    port: PORT
});

wsServer.setMaxListeners(100)

wsServer.on('connection', function (socket) {

    socket.on('message', function (msg) {

        msg.map((item) =>{
                console.log(JSON.parse(item))
            }
        )
        socket.send(msg[1]);
        socket.close()
    });

    socket.on('close', function () {
        console.log('Client disconnected');
    })

});

const ws = new WebSocket(serverAddress, {
    headers: {
        "user-agent": "Mozilla"
    }
});
ws.setMaxListeners(100)

ws.on('open', function () {
    ws.send(JSON.stringify([
        {s1: "first!"}.toString(),
        {s2: "first!"}.toString(),
    ]));
});
ws.on('message', function (msg) {
    console.log(msg.toString());
});
