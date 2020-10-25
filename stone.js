class stone {
    constructor(x, y,) {
      var options = {
          isStatic: false,
          'restitution': 0,
          'friction': 1.0,
          'density':1.2,
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50
      this.height = 50
      this.image = loadImage("Plucking mangoes/stone.png")
      
      World.add(World, this.body);
    }
    display(){
      var pos =this.body.position;
      pos. x = mouseX
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("purple")
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  

