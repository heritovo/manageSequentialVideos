let myVid;
let currentVid = 0;
let vidSource = [
  "https://mainline.i3s.unice.fr/mooc/samuraiPizzacat.mp4",
        "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"
];

// let's load the videos
//first it's got to be loading the next video
//
function loadNextVid(){
  myVid.src = vidSource [currentVid % vidSource.length];myVid.load();
  currentVid++;

}

//listener 

function playNextLoadedVideo(){
  console.log("You are playing:" + vidSource[currentVid % sources.length]);
  loadNextVid();
  myVid.play();
}

// called when the page is loaded

function init(){
  myVid = document.querySelector("#myVid");
//define the callback function when each time a video ended
myVid.addEventListener("ended", playNextLoadedVideo, false);
//now time for the next video to load and execut
loadNextVid(); 
}

