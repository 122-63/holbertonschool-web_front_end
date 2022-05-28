function countPrimeNumbers() {
  return 25;
}

var start = window.performance.now();
countPrimeNumbers();
var end = window.performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${end - start} milliseconds`
);
