$(function(){
  $("#slider").slider({
      min: 3,
      max: 30,
      slide: function(event, ui){
          $("#circle").height(ui.value);
          $("#circle").width(ui.value);
      }
  });
    
    var canvas =document.getElementById("paint");
    var context = canvas.getContext('2d');
    
    //Draw a line
    //Declaring new path
    context.beginPath();
    
    //set line width
    context.lineWidth = 40;
    //set line color
    context.strokeStyle = '#42e565';
    //set cap to the line(round ,butt,square)
    context.lineCap = "round";   
    //set line join style(bevel,round,miter)
    context.lineJoin ="round";
    //Position the context point
    context.moveTo(50,50);
    //Draw a straight line from starting point to a new position
    context.lineTo(200,200);
    //draw another line
    context.lineTo(400,100);
    //make line visible
    context.stroke();
  });

    //declare variables
        //painting erasing or not
        var paint = false;

        //painting or erasing
        var paint_erase = "paint";

       
        //get the canvas and context
    var canvas = document.getElementById("paint");
        
    var ctx = canvas.getContext("2d");
    //get the canvas container
    var container = $("#container");
   
    //Mouse position
    var mouse = {x: 0, y:0};

    //onload load saved work from localstorage

    //set drawing parameters (lineWidth,lineJoin, lineCap)
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    //click inside container
    container.mousedown(function(){
        paint = true;
        ctx.beginPath();
        
    });