var fruits:any[];
fruits=[1,"raja","Rani",140000];
console.log(fruits);


enum Colors{

    RED,
    GREEN,
    BLUE,
    BLACK,
};
myColor:Colors;
console.log(Colors.RED)


function add(x:number,y:number,z?:number):Number{

    return x+y+z;
}
let result:Number=add(10,20);
console.log(Number(result));