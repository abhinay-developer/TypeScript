class Point{
  private  x:number;
  private   y:number;
    //constructor(x?:number,y?:number) ? indicates the optional value
    constructor(x:number,y:number){
    
        this.x=x;
        this.y=y;
    
    }
    draw(){
        console.log('X:'+this.x+'Y:'+this.y);
    }
    }
    
    let point=new Point(1,2);
    //point.x=3;
    point.draw();
   
    //public by defaut all the classes are public 
    //private 
    //protected


    