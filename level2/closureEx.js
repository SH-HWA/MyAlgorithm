function outer() {
  let A = 1;
  function inner() {
    A = A + 1;
    console.log(A);
  }
  return inner();
}

outer();
outer();
outer();

console.log("HERE!");
