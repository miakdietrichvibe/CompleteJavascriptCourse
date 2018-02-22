#8Kyu Skills Acquired

##How to Find the Shortest Word in a string.
####Using a FOR loop
```js
function findShort(s){
    //Split string into an array.
    var sSplit = s.split(' ');
    //Set variable equal to the first element's character length in the array.
    var shortestWord = sSplit[0].length;
    for (var i = 0; i < sSplit.length; i++) {
        // Check for no characters
        if (sSplit[i].length === 0) {
            return 'Must include at least one word.';
        }
        // Set shortestWord equal to the smallest character count.
        if (sSplit[i].length < shortestWord) {
            shortestWord = sSplit[i].length;
        }
    }
    return shortestWord;
}
```
####Using Math (needs closer studying)
```js
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
```

##Counting the Unique Elements in a Given Array
####Using Nested Arrays (Needs Further Study)
```js
function count(array){
  var uniqueElements = {};
  for (var i = 0; i < array.length; i++) {
          uniqueElements[array[i]] = 1 + (uniqueElements[array[i]] || 0);
  }
  return uniqueElements;
}
```