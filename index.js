const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// intialize the object
const myEmitter = new MyEmitter();

//adding listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
	//Emit event
	myEmitter.emit("log", "Log Event Emitted");
}, 2000);
