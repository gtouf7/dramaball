var section1 = document.getElementById("teamList");
var section2 = document.getElementById("section2");
var video = document.getElementById("video");
var reloadBtn = document.getElementById("Rload");


function videoLoad(start, end) {
        section1.style.display = "none";
        section2.style.display = "block";
        video.requestFullscreen();
        video.src = "https://www.youtube.com/embed/aX71nSSBLe8?si=svPQGkIaguItMbY2&autoplay=1&mute=1&amp;start=" + start + "&amp;end=" + end + "&loop=1";
};

reloadBtn.addEventListener('click', function() {
        section2.style.display = "none";
        section1.style.display = "block";
});