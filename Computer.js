var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netbook"] = 2] = "Netbook";
})(Computer || (Computer = {}));
;
var cp = Computer.Laptop;
console.log(cp);
function examReturn() {
    return "examReturn 함수호출";
}
function examVoid() {
    return "examVoid 함수호출";
}
var a;
a = examReturn();
console.log(a);
examVoid();
var EE = /** @class */ (function () {
    function EE() {
        this.name = "ddd";
    }
    return EE;
}());
var ee = new EE();
console.log(ee);
//# sourceMappingURL=Computer.js.map