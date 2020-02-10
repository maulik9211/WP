document.addEventListener("DOMContentLoaded", function(event) { 
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,70,60,0,2*Math.PI);
    ctx.stroke();
});

