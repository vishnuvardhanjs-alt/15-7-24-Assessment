let a = "hello world this is LargestWord";
console.log(a);
let b = a.split(" ");

let large = "";

for (let i = 0; i < b.length; i++) {
  if (b[i].length > large.length) {
    large = b[i];
  }
}
console.log(large);
