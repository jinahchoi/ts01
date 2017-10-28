var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.printInfo = function () {
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    };
    Cat.prototype.printName = function () {
        console.log("이름: " + this.name);
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(kind) {
        this.kind = kind;
    }
    Bird.prototype.printInfo = function () {
        console.log("이 새의 종류는 " + this.kind);
    };
    return Bird;
}());
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super.call(this, "닭") || this;
    }
    Chicken.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
    };
    return Chicken;
}(Bird));
var Egg = /** @class */ (function (_super) {
    __extends(Egg, _super);
    function Egg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Egg;
}(Chicken));
var c = new Chicken();
c.printInfo();
c = new Egg();
c.printInfo();
function printSomething(a) {
    a.printInfo();
}
var dd = new Cat("동동이", 4);
dd.printInfo();
dd.printName();
printSomething(dd);
var d2 = new Cat("사랑이", 3);
//# sourceMappingURL=Animal.js.map