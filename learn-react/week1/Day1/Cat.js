import Animal from './Animal.js'

class Cat extends Animal{
    origen;
    constructor(name, age, origen){
        super(name, age);
        this.origen = origen;
    }
}

export default Cat;