class Point{
    x:number; //properties or feilds
    y:number;

    draw(){

        //.....methods
        console.log("x:"+this.x+"Y"+this.y);
    }

    getDistance(another:Point){
        //.........
    }

}
// let point:Point;//
// //TypeError: Cannot read property 'draw' of undefined
// point.draw();

let point:Point=new Point();//let point=new Point();
//object is instance of the class
point.x=1;
point.y=2;
point.draw();

