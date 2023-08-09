window.onload = function() {
    let count = 0;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;
    var t = Date.now();
    var timepassed=(Date.now()-t)/1000;
    var speed = 150;
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    function draw() {
    var timepassed = (Date.now()-t)/1000;
    t = Date.now();
    var speed = 25;
    if (y<=350) {
        speed += 50 * timepassed;
        y += speed * timepassed;
    }
    if (y>350) {
        count = 0
    }
    context.clearRect(0, 0, 600, 400);
    context.beginPath();
    context.arc(x, y, 50, 0, 2*Math.PI);
    context.fillStyle="red";
    context.fill();
    context.font='25px Arial';
    context.fillStyle='limegreen';
    context.fillText("Count: " + count, 20, 30);
    window.requestAnimationFrame(draw);
}
document.onkeydown = function(){
    count += 1;
    y -= 25;
    speed = 25;
    draw()
}
document.ontouchstart = function(){
    count += 1;
    y -= 25;
    speed = 25;
    draw()
}
document.onmousedown = function(){
    count += 1;
    y -= 25;
    speed = 25;
    draw()
}
draw()
}
