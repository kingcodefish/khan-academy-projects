// Akansha Negi gave the 100th vote!
/**
    I've been programming for 76+ months, and I have learned 69% of Intro to JS and 21% of Advanced Simulations.
    I'm a 14-year-old homeschooled student in tenth grade, and I've been markup-ing/scripting/programming since I was 6.
    I've been using Khan Academy for some math help to supplement my homeschooling curriculum.
    So even though I'm not far through the Intro to JS course on here, I've had a lot more experience working on other things.
    I have 20 programming books and I am currently working on CODE: The Hidden Language of Computer Hardware and Software, The C Programming Language, and Secrets of the Javascript Ninja.
    The languages I work with include HTML, CSS, JS, Processing.JS (JS library), PHP, MySQL, Java, C++, C, XML (Android), and hoping to expand my knowledge of Python through my new Raspberry Pi.
    I hope to become a game developer using C++, OpenGL, SFML, etc.
    Be sure to check out my website at http://kingcodefish.com/
    
    
    
    @pamela - Also tell John Resig that I'm reading his book "Secrets of the Javascript Ninja"! Hehe ^_^!
    
    
    
*/
/**
* This program utilizes what I've learned throughout the two courses I've been going through on P.JS.
* The point of this program is to let you make a cake in celebration of the end of Summer of Scripting (SOS) and when you're done, there's a surprise from Winston!
* This program utilizes multidimensional arrays, the matrix stack, gradient interpolation, sinusoidal animation models, and other stuff too.
*/

var scene = 1;
var cakeChoose = "chocolate";
var colorPick = false;
var candleNumber = 0;
var candleColors = [];
var candleBrightness = 255;
var icing = [];
var textColor = color(random(0, 255), random(0, 255), random(0, 255));
var hopperX = 330;
var hopperMove = false;
var winstonSize = 100;
var donutPositions = [[50, 50], [120, 90], [220, 10], [290, 40], [340, 70], [120, 150], [70, 180], [110, 150], [180, 250], [240, 180], [380, 320]];
var waitDelay = 200;
/*var noiseScale = 0.01;
var terHeight = 100;
var waitDelay = 80;
var t = 0;*/

/* -------------------------------- KCF.JS Start - Minified Version ------ <-- BTW This Is All Created By Me ----- */
var poly=function(array){beginShape();for(var i=0;i<array.length;i++){vertex(array[i][0],array[i][1]);}
endShape();};var rectGradient=function(x,y,width,height,from,to){for(var i=0;i<width;i++){stroke(lerpColor(from,to,i / width));line(x+i,y,x+i,y+height);}};var ellipseGradient=function(x,y,width,height,from,to,type,endGrad){if(type==="falloff"){ellipseMode(CENTER);noStroke();var gradientBars=endGrad-width;for(var i=0;i<gradientBars;i++){var sectionWidth=(gradientBars-i)+width;fill(lerpColor(from,to,i / gradientBars));ellipse(x,y,sectionWidth+width,sectionWidth+height);}}else if(type==="linear"){for(var i=0;i<1;i+=0.001){var sx=lerp(x,x+width*2,i);var c=lerpColor(from,to,i);stroke(c);line(sx,y+height*sqrt(1-sq(2*i-1)),sx,y-height*sqrt(1-sq(2*i-1)));}}};var font=function(font,size,api,fill,align){if(api===undefined){textFont(createFont(font),size);}};

/* ------------------- FUNCTIONS FOR PROGRAM USE ---------------------- */
var displayCake = function(x, y, cakeType) {
    noStroke();
    fill(255, 255, 255);
    ellipse(x, y + 60, 230, 70); // Plate
    switch(cakeType) {
        case "chocolate":
            fill(56, 31, 5);
            for(var i = 0; i < 65; i+=5) {
                ellipse(x, y + i, 200, 50);
            }
            fill(71, 43, 14);
            ellipse(x, y, 200, 50);
            break;
        case "vanilla":
            fill(187, 189, 121);
            for(var i = 0; i < 65; i+=5) {
                ellipse(x, y + i, 200, 50);
            }
            fill(218, 219, 153);
            ellipse(x, y, 200, 50);
            break;
    }
};
var displayCandle = function(x, y, color, brightness) {
    fill(color);
    rect(x, y, 10, 50, 3);
    fill(255, 255, 255);
    poly([[x, y + 5], [x + 10, y + 10], [x + 10, y + 15], [x, y + 10]]);
    poly([[x, y + 15], [x + 10, y + 20], [x + 10, y + 25], [x, y + 20]]);
    poly([[x, y + 25], [x + 10, y + 30], [x + 10, y + 35], [x, y + 30]]);
    poly([[x, y + 35], [x + 10, y + 40], [x + 10, y + 45], [x, y + 40]]);
    
    fill(240, 140, 19, brightness);
    ellipse(x + 4 * sin(frameCount) + 5, y - sin(frameCount * 5) - 15, 4, 4);
    ellipse(x + 4 * sin(frameCount) + 5, y - sin(frameCount * 5) - 15, 4, 4);
    ellipse(x + 2 * sin(frameCount) + 5, y - sin(frameCount * 5) - 13, 5, 5);
    ellipse(x + 1 * sin(frameCount) + 5, y - sin(frameCount * 5) - 11, 6, 6);
    ellipse(x + 0.5 * sin(frameCount) + 5, y - sin(frameCount * 5) - 9, 7, 7);
    ellipse(x + 0.25 * sin(frameCount) + 5, y - sin(frameCount * 5) - 7, 8, 8);
};
var displayIcing = function(x, y, color) {
    fill(color);
    ellipse(x, y, 5, 5);
};
var sidebar = function() {
    fill(0, 0, 0, 120);
    rect(-20, 0, 150, 400, 20);
    scale(0.4);
    displayCake(150, 100, "chocolate");
    displayCake(150, 300, "vanilla");
    resetMatrix();
    displayCandle(30, 180, color(255, 0, 0));
    displayCandle(80, 180, color(255, 0, 0));
    fill(255, 0, 0);
    translate(72, 185);
    rotate(45);
    rect(0, 0, 50, 10, 5);
    resetMatrix();
    translate(65, 220);
    rotate(-45);
    rect(0, 0, 50, 10, 5);
    resetMatrix();
};
// Color Picker is free to use by (Loki) Kauo and implemented by me
var ColorPickerBackground = getImage("scratchpads/colorpicker_background");
var ColorPickerGradient = getImage("scratchpads/colorpicker_overlay");
var colorpicker = function(x, y) {
    this.currentColor = color(255, 0, 0);
    this.barColor = color(255, 0, 0);
    this.barY = 0; // Red
    this.swatchCoords = new PVector(x + 163, y + 13);
    this.x = x;
    this.y = y;
};
colorpicker.prototype.draw = function() {
    imageMode(CORNER);
    image(ColorPickerBackground, this.x, this.y);
    noStroke();
    fill(this.barColor);
    rect(this.x + 14, this.y + 13, 150, 150);
    image(ColorPickerGradient, this.x + 14, this.y + 13);
    imageMode(CENTER);
    if (mouseButton === LEFT) {
        if (mouseX >= this.x + 14 && mouseY >= this.y + 13 && mouseX < this.x + 164 && mouseY < this.y + 163 && mouseIsPressed) {
            this.swatchCoords.x = mouseX;
            this.swatchCoords.y = mouseY;
            this.currentColor = get(mouseX, mouseY);
        } else if (mouseX >= this.x + 180 && mouseY >= this.y + 13 && mouseX < this.x + 180 + 17 && mouseY < this.y + 13 + 150 && mouseIsPressed) {
            this.barY = mouseY - (this.y + 13);
            this.barColor = get(this.x + 180, this.y + 13 + this.barY);
            this.currentColor = get(this.swatchCoords.x, this.swatchCoords.y);
        }
    }
    noFill();
    stroke(255);
    rectMode(CENTER);
    fill(this.currentColor);
    rect(this.swatchCoords.x, this.swatchCoords.y,6,6,3);
    rectMode(CORNER);
    stroke(0);
    noFill();
    rect(this.x + 180, this.y + 13 + this.barY, 16, 2);
    noStroke();
    fill(this.currentColor);
    rect(this.x + 283, this.y + 13, 60, 30);
    fill(this.barColor);
    rect(this.x + 213, this.y + 13, 60, 30);
};

/* ------------------- RENDERING ---------------------- */
var a = new colorpicker(28, 74);
var mouseClicked = function() {
    switch(true) {
        case scene === 1 && !colorPick && mouseX > 10 && mouseX < 100 && mouseY > 30 && mouseY < 80:
            cakeChoose = "chocolate";
            break;
        case scene === 1 && !colorPick && mouseX > 10 && mouseX < 100 && mouseY > 100 && mouseY < 160:
            cakeChoose = "vanilla";
            break;
        case scene === 1 && !colorPick && mouseX > 10 && mouseX < 50 && mouseY > 180 && mouseY < 230:
            colorPick = true;
            break;
        case scene === 1 && !colorPick && mouseX > 60 && mouseX < 100 && mouseY > 180 && mouseY < 230:
            candleColors.pop();
            candleNumber--;
            break;
        case scene === 1 && colorPick && mouseX > 290 && mouseX < 370 && mouseY > 200 && mouseY < 230:
            candleColors.push(a.currentColor);
            colorPick = false;
            candleNumber++;
            break;
        case scene === 1 && !colorPick && mouseX > 340 && mouseX < 400 && mouseY > 370 && mouseY < 400:
            scene = 2;
            break;
        case scene === 2:
            if(mouseX > 340 && mouseX < 400 && mouseY > 370 && mouseY < 400) {
                scene = 3;
            } else {
                hopperMove = true;
            }
            break;
        case scene === 3 && mouseX > 200 - winstonSize / 2 && mouseX < 200 + winstonSize / 2 && mouseY > 200 - winstonSize / 2 && mouseY < 200 + winstonSize / 2:
            winstonSize+=10;
            break;
    }
};
var scene01 = function() {
    background(209, 196, 134);
    if(frameCount % 50 === 0) {
        textColor = color(random(0, 255), random(0, 255), random(0, 255));
    }
    fill(textColor);
    textSize(40);
    text("Cake Maker", 270, 90);
    fill(125, 79, 30);
    textSize(17);
    text("Hold the right mouse button to\n  ice the cake!", 270, 115);
    rect(0, 150, 400, 300);
    displayCake(260, 230, cakeChoose);
    switch(candleNumber) {
        case 1:
            displayCandle(255, 180, candleColors[0]);
            break;
        case 2:
            displayCandle(225, 180, candleColors[0]);
            displayCandle(285, 180, candleColors[1]);
            break;
        case 3:
            displayCandle(225, 180, candleColors[0]);
            displayCandle(285, 180, candleColors[1]);
            displayCandle(255, 190, candleColors[2]);
            break;
        case 4:
            displayCandle(225, 180, candleColors[0]);
            displayCandle(245, 190, candleColors[1]);
            displayCandle(265, 190, candleColors[2]);
            displayCandle(285, 180, candleColors[3]);
            break;
        case 5:
            displayCandle(215, 180, candleColors[0]);
            displayCandle(275, 190, candleColors[1]);
            displayCandle(235, 190, candleColors[2]);
            displayCandle(255, 180, candleColors[3]);
            displayCandle(295, 180, candleColors[4]);
            break;
        case 6:
            candleNumber = 5; // I didn't use default because I start out with 0 candles.
            break;
    }
    for(var i = 0; i < icing.length; i++) {
        displayIcing(icing[i][0], icing[i][1], color(255, 255, 255));
    }
    sidebar();
    
    // Next Button
    fill(textColor);
    rect(340, 370, 60, 30, 10);
    fill(255, 255, 255);
    textSize(20);
    text("Next", 370, 393);
};
var scene02 = function() {
    background(209, 196, 134);
    
    // Text
    if(frameCount % 50 === 0) {
        textColor = color(random(0, 255), random(0, 255), random(0, 255)); // Randomize Text Color Every Few Frames
    }
    fill(textColor);
    textSize(35);
    text("Click to make Hopper\nBlow out the candles", 200, 50);
    
    // Background
    fill(125, 79, 30);
    rect(0, 150, 400, 300);
    // Table
    fill(71, 44, 17);
    rect(0, 220, 190, 80);
    // Back Legs
    fill(33, 21, 8);
    rect(20, 300, 20, 20);
    rect(150, 300, 20, 20);
    // Front Legs
    fill(48, 30, 11);
    rect(10, 300, 20, 60);
    rect(160, 300, 20, 60);
    
    translate(-20, 120);
    scale(0.5, 0.5);
    displayCake(260, 230, cakeChoose);
    switch(candleNumber) {
        case 1:
            displayCandle(255, 180, candleColors[0], candleBrightness);
            break;
        case 2:
            displayCandle(225, 180, candleColors[0], candleBrightness);
            displayCandle(285, 180, candleColors[1], candleBrightness);
            break;
        case 3:
            displayCandle(225, 180, candleColors[0], candleBrightness);
            displayCandle(285, 180, candleColors[1], candleBrightness);
            displayCandle(255, 190, candleColors[2], candleBrightness);
            break;
        case 4:
            displayCandle(225, 180, candleColors[0], candleBrightness);
            displayCandle(245, 190, candleColors[1], candleBrightness);
            displayCandle(265, 190, candleColors[2], candleBrightness);
            displayCandle(285, 180, candleColors[3], candleBrightness);
            break;
        case 5:
            displayCandle(215, 180, candleColors[0], candleBrightness);
            displayCandle(275, 190, candleColors[1], candleBrightness);
            displayCandle(235, 190, candleColors[2], candleBrightness);
            displayCandle(255, 180, candleColors[3], candleBrightness);
            displayCandle(295, 180, candleColors[4], candleBrightness);
            break;
        case 6:
            candleNumber = 5; // I didn't use default because I start out with 0 candles.
            break;
    }
    for(var i = 0; i < icing.length; i++) {
        displayIcing(icing[i][0], icing[i][1], color(255, 255, 255));
    }
    resetMatrix();
    
    if(hopperMove && hopperX > 260) {
        hopperX-=3;
    } else if(hopperX < 260) {
        hopperMove = false;
        candleBrightness-=20;
    }
    imageMode(CENTER);
    image(getImage("avatars/purple-pi"), 380, 200);
    image(getImage("seasonal/hopper-partying"), hopperX, 200 + sin(frameCount * 8) * 5);
    image(getImage("avatars/leafers-ultimate"), 380, 300);
    
    // Next Button
    fill(textColor);
    rect(340, 370, 60, 30, 10);
    fill(255, 255, 255);
    textSize(20);
    text("Next", 370, 393);
};
var scene03 = function() {
    background(209, 196, 134);
    fill(125, 79, 30);
    rect(0, 150, 400, 300);
    
    // Text
    if(frameCount % 50 === 0) {
        textColor = color(random(0, 255), random(0, 255), random(0, 255)); // Randomize Text Color Every Few Frames
    }
    fill(textColor);
    textSize(35);
    
    if(winstonSize < 400) {
        text("Keep Clicking Winston!", 200, 80);
        image(getImage("creatures/Winston"), 200, 200, winstonSize, winstonSize);
    } else {
        text("Donuts!", 200, 80);
        for(var i = 0; i < donutPositions.length; i++) {
            noFill();
            stroke(191, 159, 95);
            strokeWeight(20);
            ellipse(donutPositions[i][0], donutPositions[i][1], 50, 50);
            stroke(242, 217, 167);
            strokeWeight(12);
            ellipse(donutPositions[i][0], donutPositions[i][1], 50, 50);
            noStroke();
            donutPositions[i][1] += 5;
            if(donutPositions[i][1] >= 400) {
                donutPositions[i][1] = 0;
                donutPositions[i][0] = round(random(0, 400));
            }
        }
        waitDelay--;
        if(waitDelay <= 0) {
            ellipseGradient(200, 200, 200, 200, color(200, 200, 200, -waitDelay), color(255, 255, 255, -waitDelay), "falloff", 400);
            fill(72, 67, 224, -waitDelay);
            textSize(20);
            text("Congrats SoSers. You made it!", 200, 100);
            text("Thanks to your hard work, you can program!", 200, 200);
            text("Hope to see you next year!", 200, 300);
        }
    }
};
/*var scene03 = function() {
    imageMode(CORNER);
    strokeWeight(3);
    for(var x = 0; x < width; x++) {
        var noiseVal = noise(x * noiseScale, noiseScale * frameCount);
        if(noiseVal < 0.6) {
            stroke(230, 181, 207);
        } else if(noiseVal < 0.8) {
            stroke(194, 15, 39);
            image(getImage("creatures/Winston"), x, noiseVal * terHeight + t - terHeight / 1.7 - 60, 50, 50);
        } else if(noiseVal < 1) {
            stroke(227, 202, 38);
        }
        point(x, noiseVal * terHeight + t - terHeight / 1.7 - 10);
        stroke(noiseVal * 200 - 100, noiseVal * 200 - 100, noiseVal * 200 - 100, 25);
        point(x, noiseVal * terHeight + t - terHeight / 1.7 - 12);
    }
    if(t > 420) {
        waitDelay--;
    }
    if(waitDelay <= 0) {
        fill(255, 30, 0, waitDelay * -1/2);
        textSize(25);
        text("Hooray, Summer of Scripters", 200, 150);
        fill(255, 30, 0, waitDelay * -1/20);
        text("Good Luck Coding!", 200, 280);
    }
    t+=0.5;
};*/
var draw = function() {
    textAlign(CENTER);
    switch(scene) {
        case 1:
            scene01();
            break;
        case 2:
            scene02();
            break;
        case 3:
            scene03();
            break;
    }
    if(colorPick) {
        a.draw();
        fill(78, 97, 120);
        rect(290, 200, 80, 30, 20);
        fill(255, 255, 255);
        text("Pick", 332, 223);
    }
    if(scene === 1 && !colorPick && mouseIsPressed && mouseButton === RIGHT) {
        icing.push([mouseX, mouseY]);
    }
};