class Snow
{
    constructor(x,y)
    {      
        this.body  = Bodies.circle(x,y,30);
        this.r = 50;
        this.image1 = loadImage("snow4.webp");
        this.image2 = loadImage("snow5.webp");
        this.visibility = 255;
        World.add(world,this.body);
    }
    
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        imageMode(CENTER);
        translate(pos.x,pos.y);
        if(pos.y>540)
        {
            World.remove(world,this.body);
            tint(255,this.visibility);
            this.visibility = this.visibility -20;
        }
        /*switch(Math.round(random(1,2)))
        {
            case 1  : this.image = loadImage("snow4.webp")
            break;

            case 2  : this.image = loadImage("snow5.webp")
            break;
        }*/
        image(this.image2,0,0,this.r,this.r);
        rotate (angle);
        pop ();
    }
}
