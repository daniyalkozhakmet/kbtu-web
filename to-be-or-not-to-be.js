/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (a) {
    return {
      toBe: function (b) {
        if (a == b) {
          return true;
        } else {
          throw new Error("Not Equal");
        }
      },
      notToBe: function (b) {
        if (a !== b) {
          return true;
        } else {
          throw new Error("Equal");
        }
      },
    };
  };
  
  /**
   * expect(5).toBe(5); // true
   * expect(5).notToBe(5); // throws "Equal"
   */
   expect(5).toBe(5); // true
  