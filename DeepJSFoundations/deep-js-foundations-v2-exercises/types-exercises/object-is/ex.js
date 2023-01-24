// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
	Object.is = function ObjectIs(arg1, arg2) {
    const arg1NegZero = negZeroChecker(arg1);
    const arg2NegZero = negZeroChecker(arg2);



    if (arg1NegZero || arg2NegZero) {
      return arg1NegZero === arg2NegZero;
    } else if (Number.isNaN(arg1) && Number.isNaN(arg2)) {
			return true;
		} else {
			return arg1 === arg2;
		}

    // Helper functions
    function negZeroChecker (value) {
      // Gotta make sure the input value is a zero first
      return value == 0 && -Infinity === (1 / value); 
    }

    // Defining the isItNaN function as a note, since I couldn't come up with it myself
    function isItNan(v) {
      return v !== v;
    }
	};
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
