function mayor(array) {
  if (array.length === 0) {
    return undefined;
  }
  return Math.max(...array);
}

console.log(mayor([1, 3, 2]));      // 👉 3
console.log(mayor([-1, -3, -2]));   // 👉 -1
console.log(mayor([]));            // 👉 undefined
console.log(mayor([5]));           // 👉 5

  


