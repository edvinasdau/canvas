canvas = document.getElementById('canvas');



canvas.width = window.innerWidth -3;
canvas.height = 1000;
var ctx = canvas.getContext("2d");
var c = canvas.getContext("2d");

function Circle (x,y,dx,dy,r){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.r = r;

	this.update = function(){

		if(this.x+this.r >= innerWidth || this.x - this.r <= 0){
			this.dx = -this.dx;
		}

		if(this.y+r >= innerHeight || this.y - this.r <= 0){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}

	this.draw = function(){
		c.beginPath();
		c.fillStyle = "orange";
		c.arc(this.x,this.y,this.r,0,2*Math.PI);
		c.fill();
	}
}
var circleArray = [];

for (var i = 0 ; i < 100; i++) {

	var x = Math.floor(Math.random() * (window.innerWidth-20)+20);
	var y =  Math.floor(Math.random() * (window.innerHeight-20)+20);
	var dx = (Math.random() - 0.5) * 7;
	var dy = (Math.random() - 0.5) * 8;
	var r = 30;

	circleArray.push(new Circle(x,y,dx,dy,20));
}


d_x= 0;
d_y= 0;

document.onkeydown = function(e){
	switch (e.keyCode){
		case 37: //left
		d_x -= 20;
		break;
		case 38: //up
		d_y -= 20;
		break;
		case 39: //right
		d_x += 20;
		break;
		case 40: //down
		d_y += 20;
		break;

	}
}


function Box (x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.update = function(dx, dy){

		this.x += dx;
		this.y += dy;
		this.draw();
	}

	this.draw = function(){
		ctx.beginPath();
		ctx.rect(this.x,this.y,this.w,this.h);
		ctx.fillStyle = "black";
		ctx.fill();

	
	}	
}
var box = new Box (300,300, 200, 50);


	 function animate() {
 	requestAnimationFrame(animate);
 	ctx.clearRect(0,0, innerWidth,innerHeight);
 	for (var i = 0; circleArray.length > i; i++) {
		circleArray[i].update();
	}
 	box.update(d_x, d_y);

 	d_x = 0;
 	d_y = 0;

 }


 animate();
