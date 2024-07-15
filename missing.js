let a = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10];

console.log(a);

function missing(a) {
  let count = 0;
  for (let i = a[0]; i <= a[a.length - 1]; i++) {
    if (a[count] != i) {
      return i;
    }
    count++;
  }
}

console.log(missing(a));
