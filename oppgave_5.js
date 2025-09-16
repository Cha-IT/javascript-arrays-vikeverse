// 5a - Funksjon som fyller en array med tall opp til et angitt tall
function fyllOppTil(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// 5b - Funksjon som trekker x tall fra arrayen uten tilbakelegging
function trekkTall(arr, antall) {
  console.log("Før trekking:", arr);

  let trukket = [];
  for (let i = 0; i < antall; i++) {
    let index = Math.floor(Math.random() * arr.length);
    trukket.push(arr[index]);
    arr.splice(index, 1); // fjerner tallet fra arrayen
  }

  console.log("Trukket tall:", trukket);
  console.log("Etter trekking:", arr);
}

// Test
let minArray = fyllOppTil(20);  // array fra 1 til 20
trekkTall(minArray, 5);         // trekker 5 tall
