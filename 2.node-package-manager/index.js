const lodasha = require("lodash")


const names = ["afg", "dsfgb", "frvber", "everbrb", "rbeb"];

const capitalize = lodasha.map(names, lodasha.capitalize);
console.log(capitalize);
