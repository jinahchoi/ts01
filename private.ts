class UserDTO{
    private name : string;
    private age : number;
    private address:string;
    setName(name:string):void{
        this.name = name;
    }
    getName():string{
        return this.name;
    }
    setAddress(address:string):void{
        this.address = address;
    }
    getAddress():string{
        return this.address;
    }
}

function doTest(user:UserDTO,i:number):UserDTO{
    user.setName(i+"홍길동");
    user.setAddress(i+"서울");
    return user;
}

function doTest1(user:UserDTO):UserDTO{
    user = null;
    return user;
} 
let hong:UserDTO = new UserDTO();
doTest(hong,20);
console.log(hong.getName());
console.log(hong.getAddress());
// doTest1(hong);
// console.log(hong.getName());
// console.log(hong.getAddress());