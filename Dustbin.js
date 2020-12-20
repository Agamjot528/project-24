class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.body);
        this.body.width = width
        this.body.height = height 
        
   }
   display(){
       fill("white");
       rect(this.body.position.x, this.body.position.y,this.body.width, this.body.height)
         }
}