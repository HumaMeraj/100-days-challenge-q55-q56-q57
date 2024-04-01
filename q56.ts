// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// A mixed bag of items
let mixedArray = [1, "Apple", 2, "Banana", true, "Carrot"];

// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === 'string');

// Shows the list of just words
console.log(stringsArray);
