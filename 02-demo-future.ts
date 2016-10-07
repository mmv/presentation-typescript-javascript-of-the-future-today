// JavaScript of the future

var xs = [1, 2, 3, 4, 5];

for (let x of xs) {
    x ** 2;
}

var person = {firstName: "John", age: 20};
let {firstName, age} = person;

class Animal {
    private _weight;

    eat() { /* munch */ }
    get weight() { return this._weight; }
    set weight(value) { this._weight = value; }
}