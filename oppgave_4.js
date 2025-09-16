// Bruker fyllArray fra Oppgave 2
function fyllArray(arr, antall) {
  for (let i = 0; i < antall; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1); // tall 1-100
  }
}

// Ny funksjon som finner tall som forekommer mer enn én gang
function finnDuplikater(arr) {
  let teller = {};
  let duplikater = [];

  for (let tall of arr) {
    teller[tall] = (teller[tall] || 0) + 1;
  }

  for (let tall in teller) {
    if (teller[tall] > 1) {
      duplikater.push(Number(tall));
    }
  }

  return duplikater;
}

// Lag en array med 500 tall
let storArray = [];
fyllArray(storArray, 500);

console.log("Array med 500 tall:", storArray);
console.log("Tall som forekommer mer enn én gang:", finnDuplikater(storArray));
