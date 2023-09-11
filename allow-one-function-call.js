var once = function(fn) {
    let usedOnce = false;
    let result;
  
    return function(...args) {
      if (!usedOnce) {
        result = fn(...args);
        usedOnce = true;
        return result;
      }
      return undefined;
    };
  };