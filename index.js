const g = 40;
for (let i = 10; i <= 100; i += 10) {
  const sum = i * g;
  console.log(`${i} доларів = ${sum}`);
  alert(`${i} Доларів = ${sum} гривень`)
}
/////////////////////////////////////////////////////////////////
function func1(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
let res = func1(13);
console.log(res);
res = func1(12);
console.log(res);
// ///////////////////////////////////////////////////////////////////
function func2(num) {
  if (num <= 0) {
    return false;
  }
  for (let i = 1; i <= num; i *= 3) {
    if (i === num) {
      return true;
    }
  }
  return false;
}
res = func2(27);
console.log(res);
res = func2(30);
console.log(res);