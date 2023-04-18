(() =>{
console.log("Hello");


})();

// define the arrays
let itemNames = ['milk', 'bread', 'eggs'];
let itemStocks = [20, 10, 30];

// function to add a new item to the inventory
function addItem(name, stock) {
  if (itemNames.length >= 10) {
    console.log('Maximum number of items already in inventory.');
  } else {
    itemNames.push(name);
    itemStocks.push(stock);
    console.log(`Added ${name} with stock quantity of ${stock} to inventory.`);
  }
}

// function to update the stock quantity of an existing item
function updateStock(name, newStock) {
  let index = itemNames.indexOf(name);
  if (index !== -1) {
    itemStocks[index] = newStock;
    console.log(`Updated stock quantity of ${name} to ${newStock}.`);
  } else {
    console.log(`${name} not found in inventory.`);
  }
}

// function to calculate the total number of items in the inventory
function totalItems() {
  let total = 0;
  for (let i = 0; i < itemStocks.length; i++) {
    total += itemStocks[i];
  }
  console.log(`Total number of items in inventory: ${total}.`);
}

// function to find the item with the lowest stock quantity
function lowestStock() {
  let min = itemStocks[0];
  let minIndex = 0;
  for (let i = 1; i < itemStocks.length; i++) {
    if (itemStocks[i] < min) {
      min = itemStocks[i];
      minIndex = i;
    }
  }
  console.log(`Item with lowest stock quantity is ${itemNames[minIndex]} with a quantity of ${min}.`);
}

// example usage
addItem('apples', 15);
updateStock('bread', 5);
totalItems();
lowestStock();


