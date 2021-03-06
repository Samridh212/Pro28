class TREE {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
            this.body = Matter.Bodies.rectangle(x, y, width, height, options);
            this.image = loadImage("sprites/tree.png");

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width*45,this.height*60);
      pop();
    }
  }
  