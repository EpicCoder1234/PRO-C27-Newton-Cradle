var pointA;
var pointB;
class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Matter.Constraint.create(options);
        console.log(this.rope);
        World.add(world, this.rope);
    }
    display(){
        pointA = this.rope.bodyA.position;
        pointB = this.rope.bodyB.position;
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}