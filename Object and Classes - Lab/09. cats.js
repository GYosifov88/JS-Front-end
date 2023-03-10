function cats(data){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    let cats =[];
    for (const line of data) {
        let [name, age] = line.split(' ');
        age = Number(age);
        cats.push(new Cat(name, age))
    }

    for (const cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])