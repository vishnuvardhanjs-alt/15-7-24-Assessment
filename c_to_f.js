function convert(c) {
  //(c* 9.0/5.0)/ 32.0
  //(32°C × 9/5) + 32 = 89.6°F
  return (c * 9.0) / 5.0 + 32.0;
}

console.log(32);
console.log(convert(32));
