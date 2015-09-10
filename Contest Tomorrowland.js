//  WIP(Work-In-Progress), MOVE ALONG NAYSAYERS!
/*
    I've been programming for MANY months, 6 or more years, and I have learned 47% of Intro to JS. (So pretty much like a stack overflow lol)
    I'm a 13-year-old homeschooled student, and I've been markup-ing/scripting/programming since I was 6.
    I've been using Khan Academy for some math help to supplement my homeschooling curriculum.
    Recently, I decided to give Khan Academy's computer programming and computer science curriculum a try.
    So even though I'm not far through the Intro to JS course on here, I've had a lot more experience working on other things.
    I have 20 programming books and I am currently working on CODE: The Hidden Language of Computer Hardware and Software and The C Programming Language.
    The languages I work with include HTML, CSS, JS, PHP, MySQL, Java, C++, C, XML (Android), and a tiny itty-bitty teeny tiny bit of Python (Note I used the word bit :D).
    I hope to become a game developer using C++, OpenGL, SFML, etc.
    Be sure to check out my website at http://kingcodefish.com/
*/

/*
    Changelog:
    v0.5 - Initial WIP Release
    v0.5.1 - Updated minifying of code
    v1.0 - Add Spaceship
    v1.1 - Random Spaceship Generation
    v1.1.1 - Updated Changelog
    v1.5 - Add ground scene of what it's like on earth and implementing completely new pixel art rendering system thanks to The Eternal Swarm and T#1B12P - BEING COMPLETED!!!
*/

/*
    Tomorrowland has spaceships, in 8-bit!!!
    I chose 8-bit over 16-bit because 16-bit usually has too many colors. I may have accidentally used 16-bit colors in a few places, but otherwise this is more 8-bit than 16-bit.
    EVERYTHING IS HANDDRAWN, NO TOOLS TO MAKE THIS, JUST PURE PIXEL WRITING!!!!!!! THANKS TO THE ETERNAL SWARM FOR THE IDEA FOR THE NEW SYSTEM TO MAKE THIS A LOT EASIER!!!
*/

var slideNumber = 0;
var callMethod = true;
var callMethod2 = false;

/* -------- COLOR VARIABLES ------------- */
{
var lightGreen = color(108, 216, 6);
var mediumGreen = color(88, 189, 0);
var darkGreen = color(69, 140, 2);
var lightBlue = color(86, 223, 255);
var mediumBlue = color(62, 197, 217);
var darkBlue = color(60, 157, 212);
var white = color(255, 255, 255);
var ship1 = color(90, 190, 251);
var ship2 = color(49, 135, 255);
var ship3 = color(19, 62, 88);
var ship4 = color(0, 2, 199);
var flame1 = color(244, 184, 0);
var flame2 = color(161, 20, 4);
var flame3 = color(238, 24, 0);
var black = color(0, 0, 0);
var darkGrayBlue = color(11, 40, 43);
var mediumGrayBlue = color(26, 49, 61);
var lightGrayBlue = color(21, 59, 87);
var veryLightGrayBlue = color(35, 86, 122);
var tronRed = color(209, 0, 0);
var tronBlue = color(67, 195, 207);
}

/* -------- PIXEL DRAWING FUNCTION ---------- */
var pixel = function(x, y, color) {
    noStroke();
    fill(color);
    rect(x, y, 10, 10);
};

/* -------- GLOBE DRAWING FUNCTION ---------- */
var globe = function(x, y) {
    // Reference Image: https://www.google.com/search?espv=2&biw=1920&bih=955&tbm=isch&sa=1&q=8-bit+globe&oq=8-bit+globe&gs_l=img.3..0i30.64314.65038.0.65231.5.5.0.0.0.0.62.240.5.5.0....0...1c.1.64.img..0.5.240.Mbbm_Aaw4kI#imgrc=MzOB7kqQSBGxXM%3A
    
    var globeArray = [
                    ".........225555555.......",
                    ".......551144444442......",
                    "......514443334114112....",
                    "....5211433333341100122..",
                    "...211014333333341100112..",
                    "...210143333333411411112..",
                    "...2014333333341101441112..",
                    ".2101433333333410001444112..",
                    ".2101433333334100001111112..",
                    "210014333333341000000000012",
                    "510014333333341000000000012",
                    "541144443333341000000000145",
                    "544411114333334111100000145",
                    "543410001443333444410000145",
                    "543410000114333333410001445",
                    "543410000014333333410001445",
                    "543341000014333333410014445",
                    "543341000114333333410014145",
                    ".5434100144333333334114145.",
                    ".5434100143333333334114445.",
                    "..54410143333333333344345..",
                    "...544143333333333333345...",
                    "...544143333333333333445...",
                    "....5544433333333333455....",
                    "......511433333344445.....",
                    ".......5214444441125......",
                    ".........255552222........"
                ];

    for (var i = 0; i < globeArray.length; i++) {
        var arrayIndex = globeArray[i]; //Index of the array
        for (var d = 0; d < globeArray[i].length; d++) {
            noStroke();
            var px = arrayIndex[d];
            if (px === ".") {
                noFill();
            } else if (px === "0") {
                fill(lightGreen); // A light green
            } else if (px === "1") {
                fill(mediumGreen); // A medium green
            } else if (px === "2") {
                fill(darkGreen); // A dark green
            } else if (px === "3") {
                fill(lightBlue); // A light blue
            } else if (px === "4") {
                fill(mediumBlue); // A medium blue
            } else if (px === "5") {
                fill(darkBlue); // A dark blue
            }
            var pxSize = 10;
            rect((d * pxSize) + x, (i * pxSize) + y, pxSize, pxSize);
        }
    }
};

/* -------- SPACESHIP DRAWING FUNCTIONS  ---- */
var spaceship = function(x, y) {
    // Reference Image: https://www.google.com/search?biw=1920&bih=955&tbm=isch&sa=1&q=8-bit+spaceship&oq=8-bit+spaceship&gs_l=img.3..0j0i30j0i8i30.83558.84770.0.85108.9.9.0.0.0.0.97.489.8.8.0....0...1c.1.64.img..1.8.486.8xPZXn5hnQQ#imgrc=KbUtrdco_KEukM%3A
    
    var spaceshipArray = [
                    "......11111....11.......",
                    "...5.5..221111111111....",
                    ".657505.322222010100111.",
                    "657505..2322222222222222",
                    "657505..22333333333332..",
                    ".657505.3324444444444...",
                    "...5.5..324.............",
                    "......44444.............",
                ];
                
    for (var i = 0; i < spaceshipArray.length; i++) {
        var arrayIndex = spaceshipArray[i]; //Index of the array
        for (var d = 0; d < spaceshipArray[i].length; d++) {
            noStroke();
            var px = arrayIndex[d];
            if (px === ".") {
                noFill();
            } else if (px === "0") {
                fill(white); // A white
            } else if (px === "1") {
                fill(ship1); // The first ship color
            } else if (px === "2") {
                fill(ship2); // The second ship color
            } else if (px === "3") {
                fill(ship3); // The third ship color
            } else if (px === "4") {
                fill(ship4); // The fourth ship color
            } else if (px === "5") {
                fill(flame1); // The first flame color
            } else if (px === "6") {
                fill(flame2); // The second flame color
            } else if (px === "7") {
                fill(flame3); // The third flame color
            }
            var pxSize = 10;
            rect((d * pxSize) + x, (i * pxSize) + y, pxSize, pxSize);
        }
    }
};
var darkSpaceship = function(x, y) {
    // Reference Image: https://www.google.com/search?biw=1920&bih=955&tbm=isch&sa=1&q=8-bit+spaceship&oq=8-bit+spaceship&gs_l=img.3..0j0i30j0i8i30.83558.84770.0.85108.9.9.0.0.0.0.97.489.8.8.0....0...1c.1.64.img..1.8.486.8xPZXn5hnQQ#imgrc=KbUtrdco_KEukM%3A
    
    var darkSpaceshipArray = [
                    "......11111....11.......",
                    "...5.5..221111111111....",
                    ".657505.322222010100111.",
                    "657505..2322222222222222",
                    "657505..22333333333332..",
                    ".657505.3324444444444...",
                    "...5.5..324.............",
                    "......44444.............",
                ];
                
    for (var i = 0; i < darkSpaceshipArray.length; i++) {
        var arrayIndex = darkSpaceshipArray[i]; //Index of the array
        for (var d = 0; d < darkSpaceshipArray[i].length; d++) {
            noStroke();
            var px = arrayIndex[d];
            if (px === ".") {
                noFill();
            } else if (px === "0") {
                fill(black); // A white
            } else if (px === "1") {
                fill(darkGrayBlue); // The first ship color
            } else if (px === "2") {
                fill(mediumGrayBlue); // The second ship color
            } else if (px === "3") {
                fill(lightGrayBlue); // The third ship color
            } else if (px === "4") {
                fill(veryLightGrayBlue); // The fourth ship color
            } else if (px === "5") {
                fill(tronRed); // The first flame color
            } else if (px === "6") {
                fill(flame2); // The second flame color
            } else if (px === "7") {
                fill(flame3); // The third flame color
            }
            var pxSize = 10;
            rect((d * pxSize) + x, (i * pxSize) + 280, pxSize, pxSize);
        }
    }
};

/* -------- TRON DRAWING FUNCTION ----------- */
var tron = function(x, y, color) {
    // Reference Image: http://files.idnworld.com/motion/files/8bit/PierreManry-TronLegacy8Bit.jpg
    
    var tronArray = [
                    ".......................000000..............",
                    "......................01111110.............",
                    ".....................0211111120............",
                    ".....................02111111120...........",
                    "....................022213333120...........",
                    "....................022213333140...........",
                    "....................022433333340...........",
                    "......0000000........02433333340...........",
                    ".....022222220000000005433333350...........",
                    ".....02222222222552022054333350000000......",
                    "....02222222222520025220533330222222200....",
                    "...0225555552552052252220000002555555220...",
                    "..022522222252202522250002222252222225220..",
                    ".02252200002250225202520222225220000225220.",
                    ".025220....020225222025200025220.0..022520.",
                    "025220......0225202200255520220.50...022520",
                    "02520.......022522000200225020000.....02520",
                    "02520.......002252025522000520........02520",
                    "02520......0222552022255222520........02520",
                    "02520.....02025220222222522520........02520",
                    "025220....022500002222222525220......022520",
                    "0025220....025202252525225225220....0225200",
                    ".02252200002022022525252225225220000225220.",
                    "..022522222250000002222222522252222225220..",
                    "...022555555220....000002252222555555220...",
                    "....0022222200..........000000022222200....",
                    "......000000...................000000......",
                ];
                
    for (var i = 0; i < tronArray.length; i++) {
        var arrayIndex = tronArray[i]; //Index of the array
        for (var d = 0; d < tronArray[i].length; d++) {
            noStroke();
            var px = arrayIndex[d];
            if (px === ".") {
                noFill();
            } else if (px === "0") {
                fill(black); // A white
            } else if (px === "1") {
                fill(darkGrayBlue); // The first ship color
            } else if (px === "2") {
                fill(mediumGrayBlue); // The second ship color
            } else if (px === "3") {
                fill(lightGrayBlue); // The third ship color
            } else if (px === "4") {
                fill(veryLightGrayBlue); // The fourth ship color
            } else if (px === "5") {
                fill(color); // The first flame color
            } else if (px === "6") {
                fill(flame2); // The second flame color
            } else if (px === "7") {
                fill(flame3); // The third flame color
            }
            var pxSize = 10;
            rect((d * pxSize) + x, (i * pxSize) + y, pxSize, pxSize);
        }
    }
};

/* -------- SLIDE FUNCTIONS ----------------- */
var slide1 = function() {
    // Stars
    for (var i = 0; i < 300; i++) {
        stroke(255, 255, 255);
        strokeWeight(2);
        point(random(0, 400), random(0, 400));
    }
    
    // Globe
    pushMatrix();
    scale(0.7);
    globe(120, 250);
    popMatrix();
    
    // Spaceship Loop
    for(i = 0; i < 4; i++) {
        pushMatrix();
        scale(random(0.2, 1));
        rotate(random(-45, 45));
        spaceship(random(50, 200), random(50, 500));
        popMatrix();
    }
    // Dark Spaceship Loop
    for(i = 0; i < 4; i++) {
        pushMatrix();
        scale(random(0.2, 1));
        rotate(random(-45, 45));
        darkSpaceship(random(50, 200), random(50, 500));
        popMatrix();
    }
    
    // Navigation Text
    textSize(20);
    fill(255, 163, 186);
    text("Click on the page to check out\n    Tomorrowland on Earth!", 70, 30);
};
var slide2 = function() {
    pushMatrix();
    scale(0.5);
    tron(20, 80, tronRed);
    popMatrix();
};

/* -------------- RENDERING ----------------- */
mouseClicked = function() {
    if(slideNumber === 0) {
        slideNumber = 1;
        callMethod2 = true;
    } else {
        slideNumber = 0;
        callMethod = true;
    }
};

var draw = function() {
    switch(slideNumber) {
        case 0:
            if(callMethod) {
                background(0, 0, 0);
                slide1();
                callMethod = false;
            }
            break;
        case 1:
            background(34, 108, 133);
            slide2();
            break;
    }
};