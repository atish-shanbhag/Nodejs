// module.exports
// require


const firstModule = require('./first-module')

console.log(firstModule.add(10,20));


try{
    console.log('try divide by zero');
    let res = firstModule.divide(100,5);
    console.log(res);
    
    

}catch(error){
    console.log('Errror', error);
}


// // module wrapper

// {
//     function(exports, require, module, _filename,_dirname){
//         //
//     }
// }