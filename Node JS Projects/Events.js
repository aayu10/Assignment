var events = require('events');
var eventEmitter = new events.EventEmitter()

eventEmitter.on('SayHi',function(){
    console.log("Hi");
});
eventEmitter.on('SayHello',function(){
    console.log("Hello");
});

console.log("Before say hi!!!");
eventEmitter.emit('SayHi');
console.log("After say hi");

console.log("Before say hello!!!");
eventEmitter.emit('SayHello');
console.log("After say hello");