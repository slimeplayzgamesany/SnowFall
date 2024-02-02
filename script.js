"use strict";
//EMDL:- Erase Move Draw Loop
const canvas=document.getElementById("c1");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext("2d");
const noOfSnow=40;
let snow=[]; //Will contains all the info of snow

//! Class SnowFall-BluePrint of all snow balls---This dosent create any real object.
class SnowFall{
    constructor(x,y,speed,color,radius) {
        this.theX=x;
        this.theY=y;
        this.theSpeed=speed;
        this.theColor=color;
        this.theRadius=radius;
    }
    drawSnowBalls(context) {
        context.fillStyle="white";
        context.beginPath();
        context.arc(this.theX,this.theY,this.theRadius,0,2*Math.PI);
        context.fill();

    }
}
//Genrating and storing the snow data inside an array.
function snowData() {
    for(let i=0;i<noOfSnow;i++){
        let x=Math.random()*window.innerWidth;
        let y=Math.random()*window.innerHeight;
        let speed=Math.random()*3+0.15;
        let color=`rgba(${Math.random()*255+220},${Math.random()*255+220},${Math.random()*255+220},${Math.random()*1+0.5})`;
        let radius=Math.random()*5+1;
        snow[i]=new SnowFall(x,y,speed,color,radius);

    }
} 
snowData();

//! Drawing the snow;
function drawingSnow() {
    for(let i=0;i<noOfSnow;i++){
        ctx.fillStyle=snow[i].theColor;
        ctx.beginPath();
        ctx.arc(snow[i].theX,snow[i].theY,snow[i].theRadius,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}

//!Move the snow
function moving(){
    for(let i=0;i<noOfSnow;i++){
        snow[i].theY+=snow[i].theSpeed;
        snow[i].theX+=Math.atan(50)
        if(snow[i].theY>=window.innerHeight)snow[i].theY=-5;
    }
    
}



console.log(snow);

const snowBall1=new SnowFall(100,100,5,"white",5);
console.log(snowBall1);
console.log(snowBall1.drawSnowBalls(ctx));

function update(){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    moving();
    drawingSnow();


    //Infinite loop
    requestAnimationFrame(update);
}
update()