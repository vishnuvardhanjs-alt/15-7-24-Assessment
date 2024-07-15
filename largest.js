let a = [1, 20, 4, 5];

console.log(a);

largest = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] > largest) {
    largest = a[i];
  }
}

console.log(largest);
