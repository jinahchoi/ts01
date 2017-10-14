let num1: number = 3;
let num2: number = 5;

let str1: string = "string";
let str2: string = "test";

let numArr: Array<number> = [3,5,6];
let numArr2: number[] = [3,5,6];

// console.log(num1);
// console.log(numArr);
// console.log(numArr2);

let tp : [string,number];
tp = ['1',2];

let anyTest : any = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);

let anyArr : any[] = [1,2,3];

function setUser() : string{
    return "test";
}

function testObject(){
    return "abc";
}

var strTest = testObject();

// console.log(strTest.charAt(1));
// console.log(strTest.length);
// console.log(strTest.substr(1));
// console.log(strTest);

function testFunc(str:string, num:number):void{ //예외처리
    console.log("str  = " +  str);
    console.log("num  = " +  num);
};

testFunc("문자열",330);

function throwError():never{
    throw new Error("nonono")
};

interface testIter{
    str : string,
    num : number;
}

let AjaxUtil  = function(ti:testIter){
    this.print = function():void{
        console.log(ti.str)
        console.log(ti.num)
    }
}
var test1 = {str:"홍길동", num:30}

var au = new AjaxUtil(test1);
au.print();

class car{
    carName : string;
    constructor(public pCarName:string){
        this.carName = pCarName;
    }
}

let hyendai = new car("Sonata");
let pStr:string = "현대자동차중 제 차는 " ;
pStr += hyendai.carName;
console.log( pStr );
