let MUN_btn = document.getElementById("mun");
let JUV_btn = document.getElementById("juv");
let HAM_btn = document.getElementById("ham");
let AIK_btn = document.getElementById("aik");
let SAN_btn = document.getElementById("san");
let BRA1_btn = document.getElementById("bra1");
let BRA2_btn = document.getElementById("bra2");
let BRA3_btn = document.getElementById("bra3");

//manchester united - 0.05 - 0.09
MUN_btn.addEventListener('click', function(){
    var start = 5;
    var end = 9;
    videoLoad(start, end);
});
//bra 1 - 0.10 - 0.15
BRA1_btn.addEventListener('click', function(){
    var start = 10;
    var end = 15;
    videoLoad(start, end);
});
//hamburger - 0.16 - 0.29
HAM_btn.addEventListener('click', function(){
    var start = 16;
    var end = 29;
    videoLoad(start, end);
});
//bra 2 - 0.30 - 0.36
BRA2_btn.addEventListener('click', function(){
    var start = 30;
    var end = 36;
    videoLoad(start, end);
});
//juventus - 0.37 - 0.45
JUV_btn.addEventListener('click', function(){
    var start = 37;
    var end = 45;
    videoLoad(start, end);
});
//AIK - 0.46 - 0.57
AIK_btn.addEventListener('click', function(){
    var start = 46;
    var end = 57;
    videoLoad(start, end);
});
//santos - 0.58 - 1.15
SAN_btn.addEventListener('click', function(){
    var start = 58;
    var end = 75;
    videoLoad(start, end);
});
//bra 3 - 1.16 - 1.23
BRA3_btn.addEventListener('click', function(){
    var start = 76;
    var end = 83;
    videoLoad(start, end);
});

