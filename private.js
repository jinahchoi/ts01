var UserDTO = /** @class */ (function () {
    function UserDTO() {
    }
    UserDTO.prototype.setName = function (name) {
        this.name = name;
    };
    UserDTO.prototype.getName = function () {
        return this.name;
    };
    UserDTO.prototype.setAddress = function (address) {
        this.address = address;
    };
    UserDTO.prototype.getAddress = function () {
        return this.address;
    };
    return UserDTO;
}());
function doTest(user, i) {
    user.setName(i + "홍길동");
    user.setAddress(i + "서울");
    return user;
}
function doTest1(user) {
    user = null;
    return user;
}
var hong = new UserDTO();
doTest(hong, 20);
console.log(hong.getName());
console.log(hong.getAddress());
// doTest1(hong);
// console.log(hong.getName());
// console.log(hong.getAddress()); 
//# sourceMappingURL=private.js.map