function palin(a) {
  let b = "";
  for (let i = a.length; i >= 0; i--) {
    b += a.charAt(i);
  }
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

let a = "hello";
console.log(a);
console.log(palin(a));
