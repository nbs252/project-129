song_1 = "";
song_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWristX = 0;
scoreLeftWristY = 0;


function setup(){
canvas = createCanvas(600, 500);
canvas.center()

video = createCanvas(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("PoseNet is initialized");
}

function preload(){
song_1 = loadSound("music.mp3");
song_2 = loadSound("music2.mp3");
}

function draw(){
image(video, 0, 0, 600, 500);
fill("#00000");
stroke("#00000");

circle(rightWristX, rightWristY, 20);

if(scoreleftWrist > 0.2){
circle(leftWristX, leftWristY, 20);
stop("music2.mp3");
} else if(song_1 == false){
song.setSong("music.mp3");
song.setVolume(1);
song.rate(1);
document.getElementById("song_1").innerHTML = "Song_1 = " + song_1;
}
}

function gotPoses(results){
if(results > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristX = results[0].pose.leftWrist.y;
console.log("leftWristX "+ leftWristX +"leftWristY"+ leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX"+ rightWristX +"rightWristY"+ rightWristY);

scoreLeftWristX = results[1].pose.leftWrist.x;
scoreLeftWristY = results[1].pose.leftWrist.y;
}
}