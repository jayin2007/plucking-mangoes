class tree {
    constructor(x, y,height,angle) {
      var options = {
          isStatic : false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,20,height,options);
      this.width = 20
      this.height = height
      Matter.Body.setAngle(this.body,angle)
      this.image  = loadImage("Plucking mangoes/tree.png")
      
      World.add(World, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("blue")
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  