
class Tower {
    constructor(x, y, width, height) {
      var options = {
//set the static body(challenge 2)
     isStatis:true
      };
     this.image = loadImage("assets/tower.png")   //Load the image of the tower(challenge 5)
this.width = width;
    this.height = height;
   this.body = Bodies.rectangle(x,y,this.width,this.height,options) //write the instruction to create a rectangular tower body(challenge1)
      //add the option inside the rectangular body(challenge 2)
      //Add this object to the World(challenge 2)
      World.add(world,this.body)
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
            //change the rect as image(challenge 5)
imageMode(CENTER)
image(this.body,0,0,this.height,this.width)
//display the rect function (challenge 3)
  pop();
  }
}
