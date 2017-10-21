interface Action{
   // test : string;
    run() : string;
    setSpeed(speed:number) : void;
    printAddress():string;
}
class Robot implements Action{
    speed : number = 30 ; //변수
    run(){ // 숫자와 문자가 합쳐져 string 의 형태로 됨
        return "로봇이" + this.speed  + "정도로 뜁니다."
    }
    setSpeed (speed:number):void{
        this.speed = speed;
    }
}
class Person implements Action{
    speed : number = 30 ; //변수
    run(){ // 숫자와 문자가 합쳐져 string 의 형태로 됨
        return this.speed + "정도로 뜁니다."
    }
    setSpeed (speed:number):void{
        this.speed = speed;
    }

}


let p:Action = new Person();

p.setSpeed(50);
let str4 : string = p.run();
console.log(str4);

let r:Action = new Robot();
r.setSpeed(1000);
str4 = r.run();
console.log(str4);
r=p;

function test(vari:Action){
    console.log(vari.run());
}

let p:Action = new Person();
p.setSpeed(50);
test(p);