function fact(a) {
  let ans = 1;
  for (let i = 1; i <= a; i++) {
    ans *= i;
  }
  return ans;
}

console.log(5);

console.log(fact(5));
