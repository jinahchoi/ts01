var Robot = /** @class */ (function () {
    function Robot() {
        this.speed = 30;
    }
    Robot.prototype.run = function () {
        return "로봇이 ";
    };
    Robot.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Robot.prototype.printAddress = function () {
        return "서울 강서구 등촌1동";
    };
    return Robot;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.speed = 30;
    }
    Person.prototype.run = function () {
        return this.speed + "정도로 뜁니다.";
    };
    Person.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Person.prototype.printAddress = function () {
        return "서울 강남구 역삼1동";
    };
    return Person;
}());
function call(vari) {
    console.log(vari.run());
    console.log(vari.printAddress());
}
var p = new Person();
p.setSpeed(50);
call(p);
var r = new Robot();
r.setSpeed(1000);
call(r);
//# sourceMappingURL=interface.js.map