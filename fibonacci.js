/**
 * fibonacci improvement
 */

// Original
var fibonacci = function (n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};


// New
var memoizer = function (memo, fundamental) {
var shell = function (n) {
var result = memo[n];
if (typeof result !== 'number') {
  result = fundamental(shell, n);
  memo[n] = result;
}
  return result;
};
  return shell;
};

var ffibonacci = memoizer([0, 1], function (shell, n) {
  return shell(n - 1) + shell(n - 2);
});




