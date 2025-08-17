

function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
} 


console.log('Promise starts');
delayFn(2000).then(() => console.log('after 2 seconds resolve'));
console.log("end");



function divideFn(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject('Cannot perform division by 0');
        } else {
            resolve(num1 / num2);
        }
    })
}

divideFn(10, 5)
.then(result => console.log(result))
.catch((error) => console.log(error, "error"))

