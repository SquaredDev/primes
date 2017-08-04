//This is a prime calculator that find the primes between two whole numbers.

function findPrimes(start, end) {
  let primes = []
  for (i=start; i<=end; i++) {
      prime=true;
      if (i<2) {
        prime=false
      }
    for (j=2; j<i; j++) {
      if (i%j==0){
        prime=false
        break
      }
    }
    if (prime){
    primes.push(i)
    }
  }
  console.log(primes)
}

findPrimes(-7, 100)
