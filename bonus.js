/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initial = init;
    function increment(init){
        return ++initial;
    };
    function decrement(init){
        return --initial;
    };
    function reset(){
        initial=init;
        return initial;
    }
return{increment,decrement,reset};

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */