function back()
{
    window.location = "home.html";
}

img = "";
status = "";

function preload(){
  img = loadImage('image1.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}


function draw() {
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Apple", 115, 100);
  noFill();
  stroke("#FF0000");
  rect(100, 85, 360, 330);

  fill("#FF0000");
  text("Apple", 320, 30);
  noFill();
  stroke("#FF0000");
  rect(300, 15, 270, 250);
}
