const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Created');
}

const filePath = path.join(dataFolder, 'example.txt');

fs.writeFileSync(filePath, 'Hello from node');
console.log('Success');

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log('Line 17', readContentFromFile);

fs.appendFileSync(filePath, '\nThis is new line added to file');
console.log('New file content added');


const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, 'Hello Async nodejs', (err) => {
    if (err) throw err;
    console.log('Async file created successfully');

    fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log('Line 30', data);

    fs.appendFile(asyncFilePath, '\nNew Line added', (err) =>{
        if(err) throw err;
        console.log('LINE 34');
        
    })

    fs.readFile(asyncFilePath, 'utf-8', (err, updateddata) => {
        if (err) throw err;
        console.log('Line 40', updateddata);
    })
    })

})