<<<<<<< HEAD
var str = "test1234567";
//var str2 = "test2";
var num = 3;
//var num2 = new Number(3);
//ctrl + shift + b = build
console.log(typeof str);
console.log(num);
console.log(typeof num);
//# sourceMappingURL=test.js.map
=======
var Test = function(){
    var num1 = 1;
    var num2 = 2;

    this.plus = function(){
        return num1 + num2;
    }
    this.alertStr = function(param1, param2){
        var str = param1 + param2;
        //alert(plus());
        alert(param2); //손형정 //
    }
}

var Test2 = function(){
    this.alertStr = function(){
        alert('test2');
    }
}

var obj = {};
>>>>>>> 5488382da168303acf9a6f32a2ee75081806a184
