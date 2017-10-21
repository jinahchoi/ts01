var Cat = /** @class */ (function () {
    function Cat(name, age, height) {
        this.name = "test";
        this.age = 3;
        var robo = 3;
    }
    Cat.prototype.printInfo = function () {
        console.log("이름:" + this.name);
        console.log("나이:" + this.age);
    };
    Cat.prototype.printName = function () {
        console.log('이름' + this.name);
    };
    return Cat;
}());
function printSomting(a) {
    a.printInfo();
}
var dd = new Cat("동동이", 4, 100);
dd.printInfo();
dd.printName();
//printSometing(dd);
var d2 = new Cat("사랑이", 3);
d2.printName();
//# sourceMappingURL=Animal.js.map