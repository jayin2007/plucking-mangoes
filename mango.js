class mango {
    constructor(x, y,) {
      var options = {
        isStatic:true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50,50,options);
      this.width = 50
      this.height = 50
      this.image = loadImage("Plucking mangoes/mango.png")
      
      World.add(World, this.body);
    }
  }