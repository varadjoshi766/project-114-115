function preLoad() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video = size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("mustache x = " + results[0].pose.mustache.x);
        console.log("mustache y = " + results[0].pose.mustache.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('myFilterImage.png');
}