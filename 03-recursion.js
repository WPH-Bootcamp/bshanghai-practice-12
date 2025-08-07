function powerOf(x, n) {
  let result = 1;

  // consume time complexity
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(powerOf(2, 3)); // 8

// recursion
function pow(x, n) {
  // base case agar function tidak dipanggil terus menerus
  //   if (n == 1) return x;
  //   return x * pow(x, n - 1);
  return n === 1 ? x : x * pow(x, n - 1); // time complexity lebih rendah
}

console.log(pow(2, 3)); // 4 * 2 = 8
// pow(2, 2) n = 2, 2 * 2 = 4
// pow(2,1) n = 1, x = 2
