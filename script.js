canvas = document.getElementById('canvas');

canvas.width = window.innerWidth -3;
canvas.height = 1000;
var a = canvas.getContext("2d");
var b = canvas.getContext("2d");
var c = canvas.getContext("2d");
var d = canvas.getContext("2d");
var e = canvas.getContext("2d");
var f = canvas.getContext("2d");
var g = canvas.getContext("2d");
var h = canvas.getContext("2d");
var l = canvas.getContext("2d");
var k = canvas.getContext("2d");
var m = canvas.getContext("2d");


a.fillStyle = "brown";
a.moveTo(400,200);
a.lineTo(800,200);
a.lineTo(800,600);
a.lineTo(400,600);
a.lineTo(400,200);
a.fill();
a.stroke(); 

b.fillStyle = "blue";
b.moveTo(700,600);
b.lineTo(700,500);
b.lineTo(650,500);
b.lineTo(650,600);
b.fill();
b.stroke(); 

c.moveTo(600,100);
c.lineTo(800,200);
c.stroke(); 

d.moveTo(600,100);
d.lineTo(400,200);
d.stroke(); 

e.moveTo(450,180);
e.lineTo(450,130);
e.lineTo(480,130);
e.lineTo(480,180);
e.stroke(); 

f.moveTo(460,120);
f.lineTo(445,80);
f.stroke(); 

g.moveTo(465,110);
g.lineTo(460,75);
g.stroke(); 

h.moveTo(475,110);
h.lineTo(485,70);
h.stroke();

l.fillStyle = "yellow";
l.moveTo(500,300);
l.lineTo(500,400);
l.lineTo(600,400);
l.lineTo(600,300);
l.lineTo(500,300);
l.fill();
l.stroke(); 

h.moveTo(500,350);
h.lineTo(600,350);
h.stroke();

h.moveTo(550,300);
h.lineTo(550,400);
h.stroke();


//for (var i = 1; i < 200; i++) {
//	var x = Math.random() * window.innerWidth;
//	var y = Math.random() * window.innerHeight;
//	var z = Math.random() * 30 + 5;

//	var r = Math.round(Math.random() *255);
//	var g = Math.round(Math.random() *255);
//  var b = Math.round(Math.random() *255);
//c.beginPath();
//c.fillStyle = "rgb(" + r +","+ g + "," + b +")";
//c.arc(x,y,z,0,2*Math.PI);
//c.fill();
//}


x= 100;
dx=5;
radius= 20;
y= 100;
dy=6;

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth,innerHeight);

c.beginPath();
c.fillStyle = "orange";
c.arc(x,y,radius,0,2*Math.PI);
c.fill();

if(x+radius >= innerWidth || x - radius <= 0){
	dx = -dx;
}

if(y+radius >= innerHeight || y - radius <= 0){
	dy = -dy;
}

x += dx;

y += dy;


}
animate();
