function key(event) {
    if (event.which == 13) {   
        // alert("Enter");
        if(rw == 0){
            fid = f();                           //when press enter call f funtion
            rw = setInterval(run, 100);          //when press enter call run funtion and assign value to rw
            rs.play();
            bw = setInterval(ba, 100);           //when press enter call ba funtion and assign value to bw
            sw = setInterval(updateScore, 100);  //when press enter call ba funtion and assign value to sw
            fw = setInterval(move, 100);         //when press enter call ba funtion and assign value to fw
        } 
    }

    if (event.which == 32) {  
        // alert("Space");
        if(jw == 0) {
            clearInterval(rw);                    // stop run worker
            rs.pause();
            jw = setInterval(jump, 100);
            js.play();
        }
    }
}

var rs = new Audio("run.mp3");
rs.loop = true;                                   //reapet sound

var js = new Audio("jump.mp3");

var ds = new Audio("dead.mp3");

var fid = 0;
var p = 800;
function f() {

    for(var y = 0; y < 50; y++){
        var i = document.createElement("img");   // create new tag or element
        i.src = "flame.gif";
        i.className = "f";                       // call f class in css file
        i.style.marginLeft = p +"px";

        if(y<=5){
            p = p + 400;    //change flame gap
        }
        if(y>=6){
            p = p + 300;    //change flame gap
        }

        i.id = "d" + y;     //set diferent id to flame  

        document.getElementById("b").appendChild(i); // catch the b tag and bring i tag and put to the b
    }
}

var rw = 0;        // run worker
var r = 1;

function run(){
    var rimg = document.getElementById("boy"); // Catch the boy Id
    r = r + 1;
    if(r == 9){
        r = 1;                                 // reset r value
    }
    rimg.src = "Run ("+ r +").png";            // assing r value to run image
}

var bw = 0;         // background worker
var u = 0;
function ba() {
    u = u - 20;
    document.getElementById("b").style.backgroundPositionX = u + "px";  // catch the b id and move to background X side
}

var sw = 0;         // score worker
var a = 0;                                              //initial score
function updateScore() {
    a = a + 5;
    document.getElementById("score").innerHTML = a;     // catch the score id and put a value to HTML page
}

var fw = 0;         // flame worker
function move() {
    for(var y = 0; y < 50; y++) {
           
        var z = getComputedStyle(document.getElementById("d" + y));       // catch all css styles in together which we given tag in bracket
        var p = parseInt(z.marginLeft) - 20                               // get only integer value and reduse 20
        document.getElementById("d" + y).style.marginLeft = p + "px";     // catch the flames and set the new pixcel values
        
        if (p >= 60 & p <= 160) {
            if (mt > 370) { 
                clearInterval(rw);                    // stop run worker
                rs.pause();
                clearInterval(jw);
                jw = -1;
                clearInterval(sw);
                clearInterval(fw);
                clearInterval(bw);
                dw = setInterval(dead, 100);
                ds.play();

            }
        }
    }
}

var jw = 0;    // jump worker
var j = 1;
var mt = 375;  // boy margin top in css

function jump() {
    var jimg = document.getElementById("boy");   // catch boy id and assing to jimg
    if (j <= 6 ) {         // 1 - 6 Images
        mt = mt - 22;
    }

    if (j >= 7){           // 1 - 6 Images
        mt = mt + 22;
    }
    jimg.style.marginTop = mt + "px";

    j = j + 1;
    if (j == 13) {
        j = 1;
        clearInterval(jw);                       // stop jump worker
        rw = setInterval(run, 100);              // again start run worker
        rs.play()
        jw = 0;
        if (fid == 0) {
            fid = f();
        }

        if (bw == 0) {
            bw = setInterval(ba, 100);
        }

        if (sw == 0) {
            sw = setInterval(updateScore, 100);
        }
        
        if (fw == 0) {
            fw = setInterval(move, 100);
        }
        

    } 
    jimg.src = "jump ("+ j +").png";             // assing j value to jump image
}

var dw = 0;
var d = 0;
function dead() {
    var dimg = document.getElementById("boy");   // catch boy id and assing to dimg
    d = d + 1;
    if (d == 11){
        d = 10;
        dimg.style.marginTop = "375px"           // get dead boy to the initial top level
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = a;
    }
    dimg.src = "Dead (" + d + ").png";
}

function re() {
    location.reload();                          //load new game
}


var iI = 1;
var iw = 0;

function idle() { 
    iI = iI + 1;
    if(iI == 11){
        iI = 1;
    }
    document.getElementById("ib").src = "Idle ("+iI+").png";  // catch ib and assing iI value to jump image
}