// Function saveChickens is the function that calculate the maximum value of chicken that Superman can save.
// This function's parameters is num for number of chicken, k for roof length that superman can carry, and positions is an array of
// number of chicken's position.
// It will return number of the maximum value of chicken that Superman can save.

function saveChickens(num, k, positions) {
  // Declare an array called numberArray for storing chicken position numbers.
  let numberArray = [];

  // Declare a variable maxChickens for counting the maximum value of chicken that Superman can save.
  let maxChickens = 0;

  // Use for loop for accessing each value in position array.
  for (let i = 0; i < positions.length; i++) {
    // Check if number of chicken is equal to numbers of chicken position numbers in position array.
    // If equal, push the position of chicken in current loop index to numberArray.
    // If not, return "the number of chicken and number of value of positions must equal" string.
    if (positions.length === num) {
      numberArray.push(positions[i]);
    } else {
      return "the number of chicken and number of value of positions must equal";
    }

    // Check if the distance of first value of numberArray and the position of chicken in current loop index is -
    // greater than or qual of the roof length(k).
    // if its does, shift numberArray.
    if (positions[i] - numberArray[0] >= k) {
      numberArray.shift();
    }
  }

  // Check if the number of numberArray is greater than maxChickens so set the maxChickens equal to the number of numberArray.
  if (numberArray.length > maxChickens) {
    maxChickens = numberArray.length;
  }

  // Return maxChickens for display the maximum number of chicken that Superman can save.
  return maxChickens;
}

console.log(saveChickens(5, 5, [2, 5, 10, 12, 15]));
console.log(saveChickens(6, 10, [1, 11, 30, 34, 35, 37]));
// additional test case
console.log(
  saveChickens(
    20,
    11,
    [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 39, 40, 45, 50]
  )
);
