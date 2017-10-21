interface Animal{
    name:string;
    age:number;
    height:number;
    printInfo():void;
}

class Cat implements Animal{
    name:string;
    age:number;
    height:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
    printName():void{
        console.log("이름: " + this.name);
    }
}

class Bird implements Animal{
    name:string; 
    age:number;
    height:number;
    address:string;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
    printName():void{
        console.log("이름: " + this.name);
    }
}
function printSomething( a:Animal){
    a.printInfo();
}
let dd:Cat = new Cat("동동이",4);
dd.printInfo();
dd.printName();
printSomething(dd);
let d2:Animal = new Cat("사랑이",3);