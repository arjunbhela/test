class Log {
    constructor(x,y,h,angle) {
      var optionsp={
          'restitution':1,
          'friction':0.3,
        'density':1.0
      }  
     this.body = Bodies.rectangle(x,y,20,h,optionsp);
     this.width =  20;
     this.height = h
     Matter.Body.setAngle(this.body,angle)
     World.add(world,this.body);

    }

    display()  {
    angleMode(RADIANS);
    rotate(this.body.angle);
    var pos = this.body.position;
    push()
    rectMode(CENTER)  
    fill("white");
    strokeWeight(3)
    stroke("brown");
    translate(pos.x,pos.y);
    rect(0,0,this.width,this.height);
    pop()
     }
}