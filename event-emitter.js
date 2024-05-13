const EventEmitter = require('events')

const myEmitter = new EventEmitter()

// listener

myEmitter.on('birthday', () => {
    console.log('Happy Birthday to everyone');
})

myEmitter.on('birthday', (gift) => {
    console.log(`i will send a ${gift} to everyone`);
})

myEmitter.emit('birthday', 'Car')