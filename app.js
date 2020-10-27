navigator.getUserMedia = navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia;


//Select evrything in the index

const video = document.querySelector("#video");
const audio = document.querySelector("#audio");
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

let model;

handTrack.startVideo(video)
    .then(status => {
        navigator.getUserMedia(
            {video: {}},
            stream => {
                video.srcObject = stream;
            },
            err => console.log(err)
        );
    });


handTrack.load().then(
    lmodel => {
        model = lmodel;
    }
);