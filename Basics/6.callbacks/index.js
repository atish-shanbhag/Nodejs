
const fs = require('fs')


function person(name, callbackfn){
    console.log(`Hello ${name}`);
    callbackfn()
    
}

function address() {
    console.log("India");
    
}

person('Atish Shanbhag', address);


fs.readFile('input.txt', 'utf-8', (err, data)=> {
    if(err){
        console.log('Error', err);
        return
    }
    console.log(data);
    
})