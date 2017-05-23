export class Dog extends Animal {
    /**
     * @param {string} name
     * @param {number} age
     */

    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: No! We play ${this.favorite_activity}`);
    }
}

new Dog(7, "Bobby");