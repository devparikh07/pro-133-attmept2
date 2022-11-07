Status = "";
Bottle_image = "";
objects = [];

function preload(){
   Bottle_image = loadImage("water bottle.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(615,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Bottle_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(Bottle_image,0,0,640,350);

    if(Status != "")
    {
        for (i = 0; i <objects.lenght; i++){      
         document.getElementById("status").innerHTML = "Status : Object Detected";

         fill("#FF0000");
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + "" + percent+ "%", objects[i].x, object[i].y);
         noFill();
         stroke("#00FF00");
        rect( objects[i].x,  objects[i].y,  objects[i].width,  objects[i].height);
        }
    }
}