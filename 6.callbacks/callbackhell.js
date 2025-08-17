const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('callbackhell err', err);
        return;
    }

    const modifyFileData = data.toUpperCase();
    fs.writeFile('output.txt', modifyFileData, (err)=> {
        if(err){
            console.log('writefile errr', err);
            return;
            
        }

        console.log('data written to new file');
    fs.readFile('output.txt', 'utf-8', (err, data)=>{
        if(err){
            console.log('output readfile err', err);
            return;
            
        }
    })
    })
});