/* Examples of class definition and inheritance, including
opperations implementations - i.e. methods 
*/

class Animal{
    age: number;
    constructor(a:number){
        this.age = a;
    }
    grow(){
        this.age += 1;
    }
}

class Dog extends Animal{
    breed: string;
    constructor(b:string){
        super(1);
        this.breed = b;
    }
    bark(): string{
        return "au au au";
    }
}

export{
    Animal,
    Dog
}