var fruits;
fruits = [1, "raja", "Rani", 140000];
console.log(fruits);
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["GREEN"] = 1] = "GREEN";
    Colors[Colors["BLUE"] = 2] = "BLUE";
    Colors[Colors["BLACK"] = 3] = "BLACK";
})(Colors || (Colors = {}));
;
myColor: Colors;
console.log(Colors.RED);
function add(x, y, z) {
    return x + y + z;
}
var result = add(10, 20);
console.log(Number(result));
