const EventEmitter = require("events");
const event = new EventEmitter();

//console.log(event);
event.on("Hello", (resCode, message) => {
  console.log(`Called function ${resCode} message is ${message}`);
});

event.emit("Hello",200,"Ok");
