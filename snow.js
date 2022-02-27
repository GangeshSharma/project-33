class Snow {
    constructor(){
        this.body = Bodies.rectangle(random(50,700),-10,100,100)
        this.image = loadImage("snow5.webp")
       Matter.World.add(world,this.body)
    }
    display(){
        var x = this.body.position.x;
        var y = this.body.position.y;
        image (this.image,x,y,100,100)
    }
    
}
