function solution(n) {
  let answer = 1;

  function checkPrimeNumber(num) {
    if (checkEvenNumber(num)) {
      return false;
    }

    const sqrtPoint = Math.sqrt(num);
    let isPrimeNumber = true;
    let i = 3;

    while (isPrimeNumber && i <= sqrtPoint) {
      if (num % i === 0) {
        isPrimeNumber = false;
      }
      i += 2;
    }

    return isPrimeNumber;
  }

  function checkEvenNumber(num) {
    return num % 2 === 0;
  }

  for (let i = 3; i <= n; i++) {
    if (checkPrimeNumber(i)) {
      answer++;
    }
  }

  return answer;
}
