canvas= document.getElementById("my_canvas");

ctx=canvas.getContext("2d");









ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(265, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(365, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(465, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(415, 235, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.arc(315, 235, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=2;
ctx.rect(150, 123, 430, 200,);
ctx.stroke();








canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}
 
function circle(mouse_x, mouse_y) {

    ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke();
 
}