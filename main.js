var mustacheX ="";
var mustacheY ="";
function preload() {
    img = loadImage("pic.png")
}
function setup() {
    canvas=createCanvas(600, 600)
    canvas.position(windowWidth/2-250,windowHeight/2-300)
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log('PoseNet is Initialized')
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}
function take_snapshot() {
    save("PictureWithMustacheFilter.jpeg")
}
function draw() {
    image(video, 0, 0, 600, 600);
    image(img, mustacheX-40, mustacheY-10, 80, 90)
}