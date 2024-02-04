var prompt = require('prompt');

prompt.start();

prompt.get(['age'], function (err, result) {
    if (!result.age) {
        console.log("введіть вік")
    } else {
        if (isNaN(result.age)){
            console.log('вік повинен бути числом')
        } else {
            if (parseInt(result.age) < 0){
                console.log('вік не може бути від ємним');
            } else if (parseInt(result.age) % 10 === 1 && parseInt(result.age) % 100 !== 11){
                console.log('  age: ', result.age + " рік");
            } else if (
                parseInt(result.age) % 10 >= 2 && 
                parseInt(result.age) % 10 <=4 &&
                (parseInt(result.age) % 100 < 10 || parseInt(result.age) % 100 >=20)){
                console.log('  age: ', result.age + " роки"); 
            } else {
                console.log('  age: ', result.age + " років");
              }
        }
    }
});