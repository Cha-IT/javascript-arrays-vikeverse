// Oppgave 1a
let primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67];

// Oppgave 1b
function skrivUtArray(arr) {
  for (let tall of arr) {
    console.log(tall);
  }
}

// Test utskrift av den originale arrayen
console.log("Original array:");
skrivUtArray(primtall);

// Oppgave 1c
// Vi lager en komplett liste med alle primtall under 100
primtall = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// Oppgave 1d
console.log("Alle primtall under 100:");
skrivUtArray(primtall);
