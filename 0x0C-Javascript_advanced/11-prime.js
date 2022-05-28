function countPrimeNumbers() {
  return 25;
}

var start = window.performance.now();
for (let i = 1; i <= 100; i++) {
  setTimeout(function () {
    console.log(countPrimeNumbers());
  });
}
var end = window.performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    end - start
  } milliseconds`
);
