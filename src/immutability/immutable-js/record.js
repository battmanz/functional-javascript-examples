const Immutable = require('immutable');

/*
 * Use `Record` in place of:
 * class Product {
 *   constructor(name, age) {
 *     this.name = name;
 *     this.age = age;
 *   }
 * }
 */
const Product = Immutable.Record({ name: 'default', brand: 'default', year: 0 });

const p1 = new Product({ name: 'Xylophone', brand: 'Fisher Price', year: 2010 });
const p2 = p1.set('name', 'Power Wheels');

console.log(JSON.stringify(p1)); // { name: 'Xylophone', brand: 'Fisher Price', year: 2010 }
console.log(JSON.stringify(p2)); // { name: 'Power Wheels', brand: 'Fisher Price', year: 2010 }
