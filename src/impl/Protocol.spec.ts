import {Protocol} from "./Protocol";
import EventEmitter from "events";
import WebSocket from 'ws';
import {Server as ServerMock} from 'mock-socket';
import {WS} from "jest-websocket-mock";
import {OcppClient} from "../OcppClient";
import {Client} from "./Client";


// Use WebSocket MockServer instead of real
/*const ws = new ServerMock("ws://localhost:8080");
const wsCl = new ServerMock("ws://localhost:8081");*/
//const ws = new WS("ws://localhost:1234");
let ws: WebSocket.Server;
let client: WebSocket;
let protocol: Protocol
describe("Protocol test", () => {
    beforeAll(() => {
        ws = new WebSocket.Server({port: 8080});
    });
    it("constructor", () => {

        ws.on('connection', socket => {
            protocol = new Protocol(new EventEmitter(), socket);
        })

        client = new WebSocket("ws://host.docker.internal:8080")
        client.on('open', function () {
            client.send(JSON.stringify([2,"866bc7e1-e80a-4475-9cc6-56a05bb2222c","BootNotification",{"chargePointVendor":"ocpp-rpc","chargePointModel":"ocpp-rpc"}]));
            client.close()
        })
        const spyOnMessage = jest.spyOn(protocol, "onMessage")
        expect(spyOnMessage).toBeCalled()
        //ws.close()
        /*expect(protocol.eventEmitter).toBeDefined()
        expect(protocol.socket).toBeDefined()*/
        //protocol.socket.close();
    })

    /*it("onMessage", async () => {
        const protocol = new Protocol(new EventEmitter(), ws)
        await client.callRequest("BootNotification", {
            chargingStation: {
                model: "sda",
                vendorName: "sad"
            },
            reason: "Unknown"
        })
        const spyOnMessage = jest.spyOn(protocol, "onMessage")
        expect(protocol.onMessage).toBeCalled()*/
    /*
    await ws.connected
    const client = new WebSocket("ws://localhost:1234");
    client.send("hello");
    expect(protocolServer.onMessage).toBeCalled()*/

    // @ts-ignore
    /* const protocolServer = new Protocol(new EventEmitter(),new WS("ws://localhost:1234"));
     const client = new OcppClient("123");
     client.connect("ws://localhost:1234/");
     // @ts-ignore
     await protocolServer.socket.connected;
     await client.callRequest("BootNotification", {
         chargingStation: {
             model: "sda",
             vendorName: "sad"
         },
         reason: "Unknown"
     })
     await expect(protocolServer.socket).toReceiveMessage("hello");
     expect(protocolServer.socket).toHaveReceivedMessages(["hello"]);
     const spyOnMessage = jest.spyOn(protocolServer, "onMessage")
     await expect(spyOnMessage).toBeCalled()*/
    /*})*/
    afterAll(() => {
    });
})