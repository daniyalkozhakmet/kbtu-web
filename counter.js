/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    let initial=10
    return function() {
        initial++;
        return initial        
    };
};


const counter = createCounter(10)
console.log(counter())  // 10
console.log(counter())  // 11
console.log(counter())  // 12
