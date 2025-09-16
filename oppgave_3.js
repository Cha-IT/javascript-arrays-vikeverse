// Oppgave 3 - Lag egen funksjon som reverserer en array
function minReverse(arr) {
  let nyArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    nyArray.push(arr[i]);
  }
  return nyArray;
}

// Test
let testArray = [1, 2, 3, 4, 5];
console.log("Original:", testArray);
console.log("Reversert:", minReverse(testArray));
