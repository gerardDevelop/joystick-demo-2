export default class FakeServer {
  constructor() {
    this.connections = {};
  }

  onReceiveMsg(msgCode, socketId) {
    console.log("Received msg from client!");
  }

  update(delta, time) {

  }

  onRequestConnection() {
    // create new Socket

  }

  onReceiveConnection(socket) {
    
  }
}