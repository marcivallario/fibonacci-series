function fibonacci(num) {
  let fibArr = [0, 1]
  if (num >= 2) {
    for (i = 2; i <= num; i++) {
      let newNum = fibArr[i-1] + fibArr[i-2]
      fibArr.push(newNum)
    }
  }
  return fibArr[num];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// initialize a starting array with the first two elements
// a for loop creates all the new elements 
// access the element at the index number
