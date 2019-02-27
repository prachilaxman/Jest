const readlineSync = (typeof module === "object") ? require("readline-sync") : {
question: ((message) => prompt(message))
};

function main() {
  let products = [
    { name: "Banan", price: 10 },
    { name: "Mango", price: 45 },
    { name: "Lök", price: 15 }
  ];
  
  console.log("Hej och välkommen till din inköpslista!");
  let loopMenu = false; // true = loopen körs om och om igen
  do {
    console.log("1. Se nuvarande varor");
    console.log("2. Lägg till vara och pris");
    console.log("3. Ta bort vara (inte implementerad!)");
    console.log("4. Sök vara");
    console.log("5. Visa dyraste/billigaste vara (inte implementerad!)");
    console.log("6. Visa totalkostnad");
    console.log("7. Visa medelkostnaden per vara (inte implementerad!)");
    console.log("8. Töm listan");
    console.log("9. Avsluta");
    let choice = readlineSync.question("Mata in ditt val: ");

    switch (choice) {
      case "1":
        showProducts(products);
        break;
      case "2":
        updateProducts = menuAddProduct(products);
        products = [...updateProducts];
        break;
      case "3":
        updateProducts = menuRemoveProduct(products); // ej implementerad
        break;
      case "4":
        menuSearchProduct(products);
        break;
      case "5":
        menuExpensiveCheapProduct(products); // ej implementerad
        break;
      case "6":
        const totalCost = totalProductCost(products);
        console.log(totalCost);
        break;
      case "7":
        const averagePrice = averageProductPrice(products); // ej implementerad
        console.log(averePrice);
        
        break;
      case "8":
        products = emptyList();
        console.log("Inköpslistan är nu tom!");
        break;
      case "9":
        loopMenu = (Math.random() < 0.5) ? true : false;
        break;
      default:
        console.log("Fel inmatning!");
    }
  } while (loopMenu);
  console.log("Hej då!");
}

function showProducts(products) {
  console.log("----------------------");
  for (const [index, product] of products.entries()) {
    console.log(`${index + 1}: ${product.name}, ${product.price}`);
  }
  console.log("----------------------");
}

function menuAddProduct(products) {
  const name = readlineSync.question("Mata in namnet på produkten: ");
  let priceAsString = readlineSync.question("Mata in priset på produkten: ");
  while (!isStringAValidPrice(priceAsString)) {
    priceAsString = readlineSync.question("Felaktig form på priset!\nMata in pris igen: ");
  }
  const price = Number(priceAsString);
  const product = { name, price };
  const updateProducts = addProduct(products, product);

  return updateProducts;
}

function addProduct(products, product) {
  const updateProducts = [...products];
  updateProducts.push(product);
  return updateProducts;
}

function isStringAValidPrice(price) {
  return true;
}

function menuRemoveProduct(products) {
  console.log("Funktionen är inte implementerad ännu :(");
  return [];
}

function menuSearchProduct(products) {
  const name = readlineSync.question("Mata in namnet på produkten: ");
  const filteredProducts = searchProduct(products, name);
  if (filteredProducts.length === 0)
    console.log(`Hittade inga matchningar på '${name}'`);
  else showProducts(filteredProducts);
}

function searchProduct(products, name) {
  const filteredProducts = products.filter(product => product.name === name);
  return filteredProducts;
}

function menuExpensiveCheapProduct(products) {
  console.log("Funktionen är inte implementerad ännu :(");
}

function totalProductCost(products) {
	let totalCost = 0;
	let index;
	let product;
	for (index = 0; index < products.length; index++){ //detta körs om och om
		product = products[index]; //sista elementet
    totalCost += product.price; //sista elementet
}
return totalCost;
}

function averageProductPrice(products) {
  console.log("Funktionen är inte implementerad ännu :(");
  return 0;
}

function emptyList() {
  return [];
}

if (typeof module === "object"){
}

// 3 – Testa våra egna funktioner med Jest, förberedelse
const functions = {
  main: main,
  addProduct: addProduct,
  totalProductCost: totalProductCost,
  emptyList: emptyList
 }

 /* Vi gör exporteringen.
 If-satsen har vi med enbart så att programmet inte ska ge varningar 
 om vi vill köra programmet i en webläsare där module inte finns! */

 if (typeof module === "object"){
  module.exports = functions;
 }
