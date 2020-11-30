var autuorized;
var myName = "abhinay";
console.log(myName);
var Name = function (name) {
    console.log(name);
};
myName = (function () { return "rani"; })();
console.log(myName);
Name("abhinay");
var data = null;
console.log(data);
data = undefined;
console.log(data);
data = (function () { return null; })();
console.log(data);
data = (function () { return undefined; })();
console.log(data);
data = false;
console.log(data);
