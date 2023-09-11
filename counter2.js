var createCounter = function (init) {
  let presentCount = init;

  function increment() {
    return ++presentCount;
  }

  function decrement() {
    return --presentCount;
  }

  function reset() {
    return (presentCount = init);
  }

  return { increment, decrement, reset };
};
const counter = createCounter(5);
counter.increment();
counter.reset();
counter.decrement();
