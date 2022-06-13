let array = ['string', 1, true];
console.log(array);

let array2 = ['string', 1, true, ['array3'], ['array4'], ['array5']];
console.log(array2[3]);

array2.forEach(function(item, index){console.log(item, index)})

array2.push([]);
console.log(array2);

array2.pop();
console.log(array2);

array2.shift();
console.log(array2);

array2.unshift('novo item');
console.log(array2);

console.log(array2.indexOf(true));

array2.splice(0, 3);
console.log(array2);

array = array2.slice(0, 3);
console.log(array);

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object);

var string = object.string;
console.log(string);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);