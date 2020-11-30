let autuorized:boolean;



let  myName:string="abhinay";

console.log(myName);

var Name=function(name){
    console.log(name);
}

myName=(()=>"rani")();
console.log(myName);
Name("abhinay");


let data=null;
console.log(data);
data=undefined;
console.log(data);
data=(()=>null)();
console.log(data);
data=(()=>undefined)();
console.log(data);
data=false;
console.log(data);
