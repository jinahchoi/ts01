let userList:Array<number> = new Array<number>();

for(let i:number = 0;i<5;i++){
    addUserList(userList,i);
}

function addUserList(userList:Array<number>,
    num:number){
    userList.push(num);
}

console.log(userList);

let testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
let tList:Array<boolean> = new Array<boolean>();
tList.push(true);

const tt:number = 3;

let tt2 : number|string = 4;
console.log(typeof tt2);
tt2 = "asdf";
console.log(typeof tt2);

let add
=function(n1:number|string, 
n2:number|string):number|string{
    if(typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if(typeof n2 != "number") {
        return "2숫자가 아닙니다.";
    }
    return n1+n2;
}
console.log(add(1,"2"));

class Exam{
    public name : string;
}

let examList:Array<Exam> = new Array<Exam>
();

let e:Exam = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);
console.log(examList);


class Lotto{
    private numbers:Array<number>;
    constructor(){
        this.numbers = new 
        Array<number>();
    }
    public makeNumber():void{
        while(this.numbers.length<6){
            let num:number = 
            Math.floor(Math.random()
            *20)+1;
            this.numbers.push(num);
        }
    }
    public getNumbers()
    :Array<number>{
        return this.numbers;
    }
}

let lot:Lotto = new Lotto();
lot.makeNumber();
console.log(lot.getNumbers());

let arrs:number[] = [1,2,3];

let arrs:Lotto[]=[new Lotto(),new Lotto(),new Lotto(),new Lotto(),new Lotto()];
for(let arr in arrs){
    console.log(arrs[arr]);
}
for(let i:number=0,max:number=arrs.length;i<max;i++){
    console.log(arrs[i]);
}

console.log('test')

let test:Set<string>= new Set<string>();
test.add('1')
test.add('1')

for (let i in test){
    console.log(i);
}