const stringUtils = require('./stringUtils');

console.log(stringUtils.capitalize("somestring"));
console.log(stringUtils.capitalize("another"));
console.log(stringUtils.capitalize("Somethingelse"));


console.log(stringUtils.reverse("somestring"));
console.log(stringUtils.reverse("reverse"));
console.log(stringUtils.reverse("concatenate"));


console.log(stringUtils.contains("somestring", "ome"));
console.log(stringUtils.contains("138dfkjhsdf", "dfkjs"));
console.log(stringUtils.contains("concatenatiOMN", "OMN"));
