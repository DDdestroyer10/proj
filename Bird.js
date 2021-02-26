class Bird {

    constructor(x,y,r,angle){
   var options={
       isStatic:false,
       restitution:0.8,
       friction:0.5,
       density:1.2
   }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body)
    
    }
    display(){
      var angle = this.body.angle;
      var paperpos = this.body.position; 
      push()
      fill(225)
      strokeWeight(2);
      translate(paperpos.x,paperpos.y);
      rotate(angle)
      ellipseMode(CENTER)
      ellipse(paperpos.x,paperpos.y,this.r,this.r)
      pop()
 
    }
 
 
 
 }