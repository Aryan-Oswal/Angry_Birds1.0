class Log {
    constructor(x,y,height,angle) {
        var option = {
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,20,height,option)
        this.width = 20;
        this.height = height;
        
        Matter.Body.setAngle(this.body , angle)
        World.add(Myworld , this.body)
    }
    display(){
        rectMode(CENTER);
        
        var pos = this.body.position;
        var angle = this.body.angle
        push()
        fill('white');
        strokeWeight(5)
        translate(pos.x,pos.y);
        rotate(angle)
        rect(0,0,this.width,this.height)
        pop()
        

    }
}