class Example{
  
    constructor(private x:number,private y:number){
    }

  //   constructor(public x:number,public y:number){
  // }

    draw(){
        console.log('X:'+this.x+'Y:'+this.y);
    }
    getX(){
        return this.x;
    }
    // set X(value){
    //     if(value<0)
    //     throw new Error('Value cannot be less tah 0');
    // }
    // get X(){
    //     return this.x;
    // }
    setX(value){
        if(value<0)
        throw new Error('Value cannot be less tah 0');
    }
    }
    
    let ex=new Example(1,2);
    let x=ex.getX();//let x=ex.X;point.X=10;
    ex.setX(10);
    ex.draw();
   

    