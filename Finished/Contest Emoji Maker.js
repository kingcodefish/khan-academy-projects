/*
   THIS IS VERY MUCH A WIP (WORK-IN-PROGRESS), I'M WORKING ON MANY MORE EMOJIS AS SOON AS I CAN, AND I'LL BE SURE TO COMMENT THE PROGRAM AS MUCH AS POSSIBLE AFTERWARDS!!!
*/
/*
   I've been programming for MANY months, 6 or more years, and I have learned 40% of Intro to JS. (So pretty much like a stack overflow lol)
   I'm a 13-year-old homeschooled student, and I've been markup-ing/scripting/programming since I was 6.
   I've been using Khan Academy for some math help to supplement my homeschooling curriculum.
   Recently, I decided to give Khan Academy's computer programming and computer science curriculum a try.
   So even though I'm not far through the Intro to JS course on here, I've had a lot more experience working on other things.
   I have 20 programming books and I am currently working on CODE: The Hidden Language of Computer Hardware and Software.
   The languages I work with include HTML, CSS, JS, PHP, MySQL, Java, C++, C, XML (Android), and a tiny itty-bitty teeny tiny bit of Python (Note I used the word bit :D).
   I hope to become a game developer using C++, OpenGL, SFML, etc.
   Be sure to check out my website at http://kingcodefish.com/
*/

/*
   The goal of this program is to be able to click through a ton of examples of different emojis I make with Processing.JS.
   The algorithm for this is simple, in pseudocode:
   1. slideNumber starts at 0.
   2. The user clicks on a certain area in the canvas that the mouseClicked function tests for and assigns the appropriate slide number based off where they clicked.
   3. The draw function is called every frame and checks the slideNumber using a switch statement.
   4. Depending on the current slideNumber the draw function writes text to the screen and calls the specified emoji function.
   
   I may add options to certain emojis that allow special animation options and such too, so watch out for that.
*/

// -------- And so here starts my amazing technological and crazy emojis!!! --------

// The slideNumber variable controls the current slide number that the mouseClicked function will assign values to to give the correct emoji slide to the draw function, changing it to something other than 0 will give the program an incorrect slide to start the program from.
var slideNumber = 0;

// Everytime the user clicks, increment the slideNumber variable.
mouseClicked = function() {
    if(slideNumber === 0 && mouseX >= 50 && mouseX <= 70 && mouseY >= 290 && mouseY <= 310) {
        slideNumber = 1;
    } else if(slideNumber === 0 && mouseX >= 80 && mouseX <= 125 && mouseY >= 290 && mouseY <= 310) {
        slideNumber = 2;
    } else if(slideNumber === 0 && mouseX >= 133 && mouseX <= 155 && mouseY >= 290 && mouseY <= 310) {
        slideNumber = 3;
    } else if(slideNumber === 0 && mouseX >= 165 && mouseX <= 205 && mouseY >= 290 && mouseY <= 310) {
        slideNumber = 4;
    } else if(slideNumber === 0 && mouseX >= 210 && mouseX <= 238 && mouseY >= 290 && mouseY <= 310) {
        slideNumber = 5;
    } else if(mouseX >= 0 && mouseX <= 60 && mouseY >= 370 && mouseY <= 400) {
        slideNumber = 0;
    }
};

/* --------------EMOJIS-------------- */
var drawHappy = function(x, y, faceSize) {
    var mouthSize = faceSize/1.5;
    var eyeSize = 2/15 * faceSize;

    // Face
    stroke(204, 176, 49);
    fill(255, 220, 55);
    ellipse(x, y, faceSize, faceSize);

    // Eyes
    noStroke();
    fill(46, 46, 41);
    ellipse(x - 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize*2);
    ellipse(x + 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize*2);

    // Mouth
    fill(204, 176, 49);
    arc(x, y + faceSize * 1/12, mouthSize * 1.15, mouthSize, 1, 180);
    
    // Reset fill to black
    fill(0, 0, 0);
};
var drawKA = function(x, y, logoSize) {
    var leafSize = logoSize;
    var f = createFont("fantasy");
    image(getImage("avatars/leaf-green"), x, y, leafSize, leafSize);
    textFont(f, logoSize / 1.2);
    text("KA", x + logoSize / 1.1, y + logoSize / 1.25);
    fill(0, 0, 0);
    var f = createFont("sans-serif");
    textFont(f);
};
var drawSad = function(x, y, faceSize) {
    var mouthSize = faceSize/1.5;
    var eyeSize = 2/15 * faceSize;

    // Face
    stroke(204, 176, 49);
    fill(255, 220, 55);
    ellipse(x, y, faceSize, faceSize);

    // Eyes
    noStroke();
    fill(46, 46, 41);
    ellipse(x - 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize*1.5);
    ellipse(x + 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize*1.5);

    // Mouth
    noFill();
    strokeWeight(faceSize/10);
    stroke(204, 176, 49);
    arc(x, y + faceSize * 1/2, mouthSize * 1.15, mouthSize, 220, 320);
    
    // Reset fill to black and strokeWeight to 1
    fill(0, 0, 0);
    strokeWeight(1);
};
var drawAnd = function(x, y, gateSize) {
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(gateSize * 1/100);
    rect(x, y, gateSize/2, gateSize);
    arc(x + gateSize/2 - gateSize * 2/50, y + gateSize * 129/256, gateSize, gateSize, -90, 90);
    
    strokeWeight(gateSize * 1/25);
    line(x * 99/100, y + gateSize * 4/15, x - gateSize * 2/5, y + gateSize * 4/15);
    line(x * 99/100, y + gateSize * 11/15, x - gateSize * 2/5, y + gateSize * 11/15);
    
    line(x + gateSize * 47/48, y + gateSize * 1/2, x + gateSize * 1.4, y + gateSize * 1/2);
    
    // Reset fill to black and strokeWeight to 1
    fill(0, 0, 0);
    strokeWeight(1);
};
var drawStale = function(x, y, faceSize) {
    var mouthSize = faceSize/1.5;
    var eyeSize = 2/15 * faceSize;

    // Face
    stroke(204, 176, 49);
    fill(255, 220, 55);
    ellipse(x, y, faceSize, faceSize);

    // Eyes
    noStroke();
    fill(46, 46, 41);
    ellipse(x - 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize*1.5);
    ellipse(x + 1/6 * faceSize, y - 1/6 * faceSize, eyeSize, eyeSize*1.5);

    // Mouth
    noFill();
    strokeWeight(faceSize/10);
    stroke(204, 176, 49);
    line(x - faceSize * 1/4, y + faceSize * 1/5, x + faceSize * 1/4, y + faceSize * 1/5);
    
    // Reset fill to black and strokeWeight to 1
    fill(0, 0, 0);
    strokeWeight(1);
};

/* --------RENDERING FUNCTION--------- */
var draw = function() {
    // Reset the background to light blue to draw on top of it.
    background(122, 189, 240);
    
    // Switch statement to test for the current value of slideNumber and render the canvas based off of its current state.
    switch(slideNumber) {
        // Start Screen
        case 0:
            textSize(40);
            text("KCF's Emojis", 90, 40);
            drawKA(100, 60, 100);
            textSize(20);
            text("Click on an icon below to see a full page of examples using it.", 65, 200, 300, 50);
            textSize(17);
            fill(255, 255, 255);
            text("Many more to come!", 240, 306);
            fill(0, 0, 0);
            drawHappy(60, 300, 20);
            drawKA(80, 288, 25);
            drawSad(145, 300, 20);
            drawAnd(175, 290, 20);
            drawStale(225, 300, 20);
            textSize(15);
            text("The text form of the emoji will appear down here!", 42, 370);
            break;
        // Happy Emoji
        case 1:
            fill(0, 0, 0);
            textSize(40);
            text("Happy Emoji", 80, 40);
            drawHappy(200, 110, 100);
            textSize(25);
            text("I feel great today!", 50, 210);
            drawHappy(265, 200, 25);
            textSize(35);
            text("I want to be just like Winston someday!", 30, 250, 350, 200);
            drawHappy(350, 305, 35);
            textSize(15);
            text("Text form: :D or :-D", 132, 370);
            noStroke();
            fill(15, 89, 168);
            rect(0, 370, 60, 30);
            textSize(15);
            fill(255, 255, 255);
            text("Back", 13, 390);
            break;
        // KA Emoji
        case 2:
            fill(0, 0, 0);
            textSize(40);
            text("KA Emoji", 120, 40);
            drawKA(100, 60, 100);
            textSize(25);
            text("Don't you love       !", 50, 210);
            drawKA(210, 190, 25);
            textSize(35);
            text("I've earned a ton of energy points on       !", 30, 250, 350, 200);
            drawKA(290, 289, 35);
            textSize(15);
            text("Text form: (/)KA", 152, 370);
            noStroke();
            fill(15, 89, 168);
            rect(0, 370, 60, 30);
            textSize(15);
            fill(255, 255, 255);
            text("Back", 13, 390);
            break;
        // Sad Emoji
        case 3:
            fill(0, 0, 0);
            textSize(40);
            text("Sad Emoji", 105, 40);
            drawSad(200, 110, 100);
            textSize(25);
            text("I feel terrible today!", 50, 210);
            drawSad(285, 200, 25);
            textSize(35);
            text("I can't believe Winston was so mad at me!", 30, 250, 370, 200);
            drawSad(350, 305, 35);
            textSize(15);
            text("Text form: :( or :-(", 142, 370);
            noStroke();
            fill(15, 89, 168);
            rect(0, 370, 60, 30);
            textSize(15);
            fill(255, 255, 255);
            text("Back", 13, 390);
            break;
        // AND Gate Emoji
        case 4:
            fill(0, 0, 0);
            textSize(40);
            text("AND Gate Emoji", 55, 40);
            drawAnd(160, 60, 100);
            textSize(25);
            text("I saw an          gate in a PC!", 50, 210);
            drawAnd(165, 190, 25);
            textSize(35);
            text("I found a ton of      gates in a full adder.", 30, 250, 370, 200);
            drawAnd(293, 248, 35);
            textSize(15);
            text("Text form: =D-", 147, 370);
            noStroke();
            fill(15, 89, 168);
            rect(0, 370, 60, 30);
            textSize(15);
            fill(255, 255, 255);
            text("Back", 13, 390);
            break;
        // Stale Emoji
        case 5:
            fill(0, 0, 0);
            textSize(40);
            text("Stale Emoji", 100, 40);
            drawStale(200, 110, 100);
            textSize(25);
            text("I'm so bored............", 50, 210);
            drawStale(285, 200, 25);
            textSize(35);
            text("There's nothing I can do around here!", 30, 250, 370, 200);
            drawStale(305, 305, 35);
            textSize(15);
            text("Text form: :| or :-|", 142, 370);
            noStroke();
            fill(15, 89, 168);
            rect(0, 370, 60, 30);
            textSize(15);
            fill(255, 255, 255);
            text("Back", 13, 390);
            break;
/*        // Closing Screen
        default:
            textSize(30);
            text("And that's all so far!!!", 60, 100);
            text("Hit Restart below to go back to the beginning.", 50, 200, 350, 100);
*/
    }
};