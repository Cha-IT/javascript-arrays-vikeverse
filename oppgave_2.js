// 2a - Funksjon som fyller en array med tilfeldige tall
function fyllArray(arr, antall) {
  for (let i = 0; i < antall; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1); // tall 1-100
  }
}

// 2b - Lag en array med 50 tall
let tallArray = [];
fyllArray(tallArray, 50);
console.log("Array med 50 tall:", tallArray);

// 2c - Sorter arrayen i synkende rekkefølge
tallArray.sort((a, b) => b - a);
console.log("Sortert (synkende):", tallArray);

// 2d - Finn minste og største tall
let storst = tallArray[0]; 
let minst = tallArray[tallArray.length - 1];
console.log("Størst:", storst, "Minst:", minst);

// 2e - Funksjon som fjerner partall
function fjernPartall(arr) {
  return arr.filter(tall => tall % 2 !== 0);
}

let utenPartall = fjernPartall(tallArray);
console.log("Uten partall:", utenPartall);
