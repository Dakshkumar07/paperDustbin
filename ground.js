class Ground{
    constructor (x,y,width,height){
        var groud_options = {
            isStatic : true
          } 
          
          this.body = Bodies.rectangle(x,y,width,height,groud_options);
          this.width = width
          this.height = height
          World.add(world,this.body);
    }
 display(){
     var pos = this.body.position
     rectMode(CENTER)
     fill("brown")
     rect(pos.x,pos.y,this.width,this.height)
 }
}