const fs = require('fs');
fs.readFile('./read.txt','utf8', (err, data) => {
    if(err) {
        throw Error('Error reading file')
    }
   

    fs.writeFile('./async-write.txt',data + ' Hello from the other side','utf8', (err) => {
        if(err) {
            throw Error('Error writing file')
        }
    })
})

console.log('async file');

