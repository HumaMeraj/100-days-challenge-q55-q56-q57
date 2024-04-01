// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
var mixedArray = [1, "Apple", 2, "Banana", true, "Carrot"];
// Picks out only the words
var stringsArray = mixedArray.filter(function (item) { return typeof item === 'string'; });
// Shows the list of just words
console.log(stringsArray);
