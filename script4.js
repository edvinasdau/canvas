canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

window.addEventListener("mousemove", function(event){
	mouse.x = event.x;
	mouse.y = event.y;
});

var mouse = {
	x : 0,
	y : 0
}


	function draw_circle(x, y, is_touched){
		c.beginPath();
		c.arc(x,y,50,0,2*Math.PI);
		c.fillStyle = (is_touched) ? "orange" : "green";
		c.fill();
	}



 function animate() {
 	requestAnimationFrame(animate);
 	c.clearRect(0,0, innerWidth,innerHeight);
 	
 	var touching = false;

 	if (
 		(mouse.x - innerWidth/2)) {
 		touching = true;
 	}

 	draw_circle (window.innerWidth/2 , window.innerHeight/2 , touching);
 	
}	
 animate();