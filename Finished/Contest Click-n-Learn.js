// WIP(Work-In-Progress), MOVE ALONG NAYSAYERS!
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
    Credit for some of this information goes to Charles Petzold for writing CODE, Schabse Laks for making silon.slaks.net, and the creator of In One Lesson for making the video on How Computers Add Numbers. The link for his video can be found here: https://www.youtube.com/watch?v=VBDoT8o4q00
*/

/* ------ CHANGELOG --------
   v0.7.9 - Added Changelog
   v0.8   - Added XOR Gate section
   v0.8.1 - Fixed page 16 to allow text to have a little wiggleroom for some devices that were cropping it.
   v0.9   - Added Half Adder section - CURRENTLY UNDERWAY
*/

/*
   The goal of this program is to inform people on how computers add numbers.
   The program will feature many examples, diagrams, info, and extra tips that can be clicked on.
   More features are being worked on!
*/

/* ------------ INITIALIZE VARIABLES ----------------- */
var slideNumber = 0;
var numberOfSlides = 21;
var s1try = 0;
var s2try = 0;
var s3try = 0;
var s4try = 0;
var s5try = 0;
var s6try = 0;

/* ------------ PROGRAM FUNCTIONS --------------------- */
var title = function(pageTitle) {
    fill(35, 145, 219);
    textSize(32);
    textFont(createFont("Segoe UI Bold"));
    text("How Computers", 30, 32, 350, 80);
    textSize(24);
    text("Add Numbers", 115, 83);
    textFont(createFont("Segoe UI"));
    fill(128, 31, 55);
    text(pageTitle, 300, 34, 80, 60);
    fill(35, 145, 219);
    stroke(23, 124, 212);
    strokeWeight(2);
    line(0, 100, 400, 100);
};
var backButton = function() {
    if(slideNumber !== 0) {
        noStroke();
        if(mouseX >= 37 && mouseX <= 100 && mouseY >= 67 && mouseY <= 90) {
            fill(72, 146, 219);
            cursor(HAND);
        } else {
            fill(15, 89, 168);
            cursor(ARROW);
        }
        rect(37, 67, 60, 20, 10);
        textSize(15);
        fill(255, 255, 255);
        text("Back", 50, 82);
    } else {
        cursor(ARROW);
    }
};
var drawAnd = function(x, y, gateSize) {
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(gateSize * 1/100);
    rect(x, y, gateSize/2, gateSize);
    strokeWeight(gateSize * 1/200);
    arc(x + gateSize/2 - gateSize * 2/50, y + gateSize * 129/256, gateSize, gateSize, -90, 90);
    
    strokeWeight(gateSize * 1/25);
    line(x * 99/100, y + gateSize * 4/15, x - gateSize * 2/5, y + gateSize * 4/15);
    line(x * 99/100, y + gateSize * 11/15, x - gateSize * 2/5, y + gateSize * 11/15);
    
    line(x + gateSize * 47/48, y + gateSize * 1/2, x + gateSize * 1.4, y + gateSize * 1/2);
    
    fill(0, 0, 0);
    textSize(gateSize * 2/5);
    text("AND", x + gateSize * 1/15, y + gateSize * 10/16);
    fill(35, 145, 219);
};
var drawOr = function(x, y, gateSize) {
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(gateSize * 1/100);
    rect(x + gateSize/19, y, gateSize/2, gateSize);
    fill(220, 250, 247);
    arc(x, y + gateSize/2, gateSize/2, gateSize, -90, 90);
    fill(255, 255, 255);
    strokeWeight(gateSize * 1/200);
    arc(x + gateSize/2 - gateSize * 2/50, y + gateSize * 129/256, gateSize, gateSize, -90, 90);
    
    strokeWeight(gateSize * 1/25);
    line(x * 22/20, y + gateSize * 4/15, x - gateSize * 1/5, y + gateSize * 4/15);
    line(x * 22/20, y + gateSize * 11/15, x - gateSize * 1/5, y + gateSize * 11/15);
    
    line(x + gateSize * 47/48, y + gateSize * 1/2, x + gateSize * 1.4, y + gateSize * 1/2);
    
    fill(0, 0, 0);
    textSize(gateSize * 2/5);
    text("OR", x + gateSize * 9/30, y + gateSize * 10/16);
    fill(35, 145, 219);
};
var drawXor = function(x, y, gateSize) {
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(gateSize * 1/100);
    rect(x + gateSize/19, y, gateSize/2, gateSize);
    fill(220, 250, 247);
    arc(x, y + gateSize/2, gateSize/2, gateSize, -90, 90);
    noFill();
    arc(x - gateSize/8, y + gateSize/2, gateSize/2, gateSize, -90, 90);
    fill(255, 255, 255);
    strokeWeight(gateSize * 1/200);
    arc(x + gateSize/2 - gateSize * 2/50, y + gateSize * 129/256, gateSize, gateSize, -90, 90);
    
    strokeWeight(gateSize * 1/25);
    line(x + gateSize * 1/16, y + gateSize * 4/15, x - gateSize * 1/5, y + gateSize * 4/15);
    line(x + gateSize * 1/16, y + gateSize * 11/15, x - gateSize * 1/5, y + gateSize * 11/15);
    
    line(x + gateSize * 47/48, y + gateSize * 1/2, x + gateSize * 1.4, y + gateSize * 1/2);
    
    fill(0, 0, 0);
    textSize(gateSize * 3/10);
    text("XOR", x + gateSize * 9/30, y + gateSize * 19/32);
    fill(35, 145, 219);
};
var light = function(x, y, bulbSize, lightType) {
    noStroke();
    fill(112, 112, 112);
    ellipse(x, y + bulbSize * 9/14, bulbSize * 3/4, bulbSize * 1/8);
    fill(153, 153, 153);
    ellipse(x, y + bulbSize * 4/7, bulbSize * 3/4, bulbSize * 1/8);
    fill(171, 171, 171);
    ellipse(x, y + bulbSize* 1/2, bulbSize * 3/4, bulbSize * 1/8);
    switch(lightType) {
        case 0:
            fill(224, 224, 224);
            break;
        case 1:
            fill(255, 213, 0);
    }
    ellipse(x, y, bulbSize * 9/10, bulbSize);
};
var andCircuit = function(wire1, wire2, x, y) {
    var s1 = y;
    var s2 = y;
    var lightType = 0;
    if(wire1 === 0) {
        s1 = y - 15;
    }
    if(wire2 === 0) {
        s2 = y - 15;
    }
    if(wire1 === 1 && wire2 === 1) {
        lightType = 1;
    }
    stroke(0, 0, 0);
    line(x, y, x + 55, y);
    line(x + 58, y, x + 95, s1);
    line(x + 98, y, x + 135, y);
    line(x + 138, y, x + 175, s2);
    line(x + 178, y, x + 235, y);
    light(x + 255, y - 25, 40, lightType);
    
    fill(35, 145, 219);
};
var orCircuit = function(wire1, wire2, x, y) {
    var s1 = y - 30;
    var s2 = y + 30;
    var lightType = 0;
    if(wire1 === 0) {
        s1 = y - 45;
    }
    if(wire2 === 0) {
        s2 = y + 15;
    }
    if(wire1 === 1 || wire2 === 1) {
        lightType = 1;
    }
    stroke(0, 0, 0);
    line(x, y, x + 93, y);
    line(x + 95, y - 30, x + 95, y + 29);
    line(x + 97, y - 30, x + 115, y - 30);
    line(x + 118, y - 30, x + 145, s1);
    line(x + 97, y + 30, x + 115, y + 30);
    line(x + 118, y + 30, x + 145, s2);
    line(x + 148, y - 30, x + 174, y - 30);
    line(x + 148, y + 30, x + 174, y + 30);
    line(x + 177, y - 30, x + 177, y + 29);
    line(x + 178, y, x + 235, y);
    light(x + 255, y - 25, 40, lightType);
    
    fill(35, 145, 219);
};
var xorCircuit = function(wire1, wire2, x, y) {
    var s1 = y - 15;
    var s2 = y - 45;
    var lightType = 0;
    if(wire1 === 0) {
        s1 = y + 15;
    }
    if(wire2 === 0) {
        s2 = y - 15;
    }
    if(wire1 === 1 && wire2 === 1) {
        lightType = 0;
    } else if(wire1 === 1 || wire2 === 1) {
        lightType = 1;
    }
    stroke(0, 0, 0);
    line(x, y, x + 67, y);
    line(x + 70, y, x + 97, s1);
    line(x + 136, y - 45, x + 172, y - 45);
    line(x + 99, y - 15, x + 172, y - 15);
    line(x + 99, y + 15, x + 136, y + 15);
    stroke(0, 145, 255);
    line(x + 135, y - 44, x + 138, y + 14);
    stroke(0, 0, 0);
    line(x + 174, s2, x + 201, y - 30);
    line(x + 202, y - 30, x + 235, y - 30);
    light(x + 255, y - 55, 40, lightType);
    
    fill(35, 145, 219);
};
var halfAdder = function(input1, input2, x, y) {
    fill(255, 255, 255);
    stroke(0, 0, 0);
    rect(x + 50, y, 50, 50);
    rect(x + 150, y, 50, 50);
    
    line(x + 75, y + 50, x + 75, y + 79);
    line(x + 75, y + 80, x + 114, y + 80);
    line(x + 115, y + 80, x + 115, y + 140);
    line(x + 16, y + 110, x + 114, y + 110);
    line(x + 15, y + 110, x + 15, y + 130);
    
    stroke(0, 145, 255);
    line(x + 175, y + 50, x + 175, y + 79);
    line(x + 172, y + 80, x + 139, y + 80);
    line(x + 139, y + 80, x + 139, y + 140);
    line(x + 137, y + 132, x + 39, y + 132);
    stroke(0, 0, 0);
    
    pushMatrix();
    rotate(90);
    drawAnd(y + 152, -x - 52, 50);
    drawXor(y + 152, -x - 152, 50);
    popMatrix();
    
    fill(255, 255, 255);
    rect(x + 2, y + 220, 50, 50);
    rect(x + 102, y + 220, 50, 50);
    
    fill(0, 0, 0);
    textSize(30);
    if(input1 === 1) {
        text("1", x + 67, y + 35);
    } else {
        text("0", x + 67, y + 35);
    }
    if(input2 === 1) {
        text("1", x + 167, y + 35);
    } else {
        text("0", x + 167, y + 35);
    }
    if(input1 === 1 && input2 === 1) {
        text("1", x + 19, y + 255);
        text("0", x + 119, y + 255);
    } else if(input1 === 1 || input2 === 1) {
        text("0", x + 19, y + 255);
        text("1", x + 119, y + 255);
    } else {
        text("0", x + 19, y + 255);
        text("0", x + 119, y + 255);
    }
    
    // Reset fill
    fill(35, 145, 219);
};

/* ------------ SCREENS ------------- */
var screen00 = function() {
    title();
    textSize(17);
    text("This program is designed to teach you how computers add numbers. All of the operations that are listed here happen inside of the ALU (arithmetic logic unit) that's inside of the CPU (cental processing unit) of your computer.", 20, 130, 360, 101);
    text("To navigate, click on the page to go to the next slide. To go backwards, right click or hit the back button that is available on the other slides below the title.", 20, 280, 360, 80);
    backButton();
};
var screen01 = function() {
    title("Binary Objects");
    textSize(17);
    text("Think of some of the things you use every day, light switches, power buttons, door locks, etc. These are all examples of binary objects. You might be thinking what is a binary object? Well binary objects are anything that has only two states, on and off. There is no in-between. Now you may be able to understand why all these things are binary objects; lights go on and off, power buttons are either pressed or depressed, and doors are either locked or not. So what does the term binary mean then?", 20, 130, 360, 280);
    backButton();
};
var screen02 = function() {
    title("Binary Objects");
    textSize(17);
    text("Binary is a base-two number system. Now think of decimal as base-10. In a base-10 system there are 10 digits, 0-9, hence the base-10 term. So in binary we only have two digits and those digits are 0 and 1. And you may be thinking, \"How can you formulate any number with just 0s and 1s?\" Well you can, just that we have to think of place values differently. In binary we start with a place value of 1 and it doubles from there. e.g., 1's places, 2's place, 4's place, etc. And so with that system we are just turning each value either on or off, 1 or 0.", 20, 118, 360, 290);
    backButton();
};
var screen03 = function() {
    title("Binary Objects");
    textSize(17);
    text("And so with that we are able to count any number as long as we keep doubling the place value if we run out of space. So for example, I can count to 10 with 4 places, the numbers would look like this in binary:", 20, 115, 360, 290);
    fill(0, 0, 0);
    textSize(45);
    text("1010", 145, 280);
    textSize(14);
    text("8    4     2   1", 155, 295);
    fill(35, 145, 219);
    textSize(17);
    text("The subscripts below the numbers are showing the place values of the different places. Each of those places is one bit. 8 bits make a byte.", 20, 320, 360, 80);
    backButton();
};
var screen04 = function() {
    title("Binary Objects");
    textSize(17);
    text("We can also calculate the place value of nth-numbered bit by doing 2 to the n minus 1 power. So for example, what if we wanted to know what place value the 34th bit would be? We could write 2^33 and be able to find it based off that. Computers are based completely off binary. Even text translates directly to binary, because the ASCII system translates directly to binary. And ASCII is directly embedded in the Unicode we use today. So in a computer you'll usually see bytes which look similar to this: ", 20, 117, 360, 293);
    fill(0, 0, 0);
    text("01001000", 262, 383);
    backButton();
};
var screen05 = function() {
    title("Logic Gates");
    textSize(17);
    text("Logic gates are the basis of all computing. They take two binary inputs (0/1 or true/false), and result in a binary output whose value depends on the inputs. These gates form the building blocks upon which all computers are built. Each of these gates are represented by a certain symbol. In most diagrams you will see a logic gate represented by its symbol. But in reality, the actual logic gate is built with electronic components. In the following examples, we'll be using the symbol to represent them, but also show them translated into ideal circuitry.", 20, 117, 360, 270);
    backButton();
};
var screen06 = function() {
    title("AND Gate");
    textSize(17);
    text("An AND gate is a logic gate where the output is true only if the two inputs are both true. Here is the symbol for an AND gate:", 20, 118, 360, 270);
    drawAnd(150, 190, 70);
    textSize(17);
    text("And this is what it looks like when it's made from electronic components:", 20, 275, 360, 270);
    andCircuit(0, 0, 50, 355);
    backButton();
};
var screen07 = function() {
    title("AND Gate");
    andCircuit(0, 0, 50, 175);
    textSize(17);
    text("Both switches are open(or off) so the output to the light bulb is off.", 20, 210, 360, 270);
    andCircuit(1, 0, 50, 300);
    text("Now the first switch is closed, but the second isn't so the bulb doesn't light.", 20, 335, 360, 270);
    backButton();
};
var screen08 = function() {
    title("AND Gate");
    andCircuit(0, 1, 50, 160);
    textSize(17);
    text("Now the second switch is closed, but the first switch is open so the bulb still doesn't light.", 20, 185, 360, 270);
    andCircuit(1, 1, 50, 280);
    text("Now that both switches are closed, the bulb is able to receive current and turn on. From here on we'll be using the symbol for the AND gate to represent this same function.", 20, 305, 360, 270);
    backButton();
};
var screen09 = function() {
    title("AND Gate");
    andCircuit(s1try, s2try, 50, 160);
    rect(100, 175, 60, 23);
    rect(180, 175, 60, 23);
    fill(173, 31, 31);
    rect(100, 198, 60, 23);
    rect(180, 198, 60, 23);
    fill(255, 255, 255);
    textSize(20);
    text("Close", 105, 194);
    text("Open", 105, 217);
    text("Close", 185, 194);
    text("Open", 186, 217);
    fill(35, 145, 219);
    textSize(18);
    text("Hit the buttons above to open and close the two switches in the circuit. These two switches are said to be in \"series.\" This means that the two switches are connected one after the other. They can also be connected in \"parallel.\" Switches that are in parallel allow us to make OR gates...", 20, 230, 360, 270);
    backButton();
};
var screen10 = function() {
    title("OR Gate");
    textSize(17);
    text("An OR gate is a logic gate where the output is true as long as at least one input is true. Here is the symbol for an OR gate:", 20, 115, 360, 270);
    drawOr(150, 188, 70);
    textSize(18);
    text("And this is what it looks like when it's made from electronic components:", 20, 270, 360, 270);
    orCircuit(0, 0, 50, 363);
    backButton();
};
var screen11 = function() {
    title("OR Gate");
    orCircuit(0, 0, 50, 160);
    textSize(17);
    text("Both switches are open(or off) so the output to the light bulb is off.", 20, 205, 360, 270);
    orCircuit(1, 0, 50, 287);
    text("Now the first switch is closed, but the second isn't. The bulb lights because current can pass through the top side.", 20, 330, 360, 270);
    backButton();
};
var screen12 = function() {
    title("OR Gate");
    orCircuit(0, 1, 50, 160);
    textSize(17);
    text("Now the first switch is open and the second is closed. Current is able to pass through the bottom side.", 20, 205, 360, 270);
    orCircuit(1, 1, 50, 305);
    text("Now that both switches are closed, current can pass through both sides.", 20, 350, 360, 270);
    backButton();
};
var screen13 = function() {
    title("OR Gate");
    orCircuit(s3try, s4try, 50, 197);
    rect(80, 137, 60, 23);
    rect(80, 210, 60, 23);
    fill(173, 31, 31);
    rect(80, 160, 60, 23);
    rect(80, 233, 60, 23);
    fill(255, 255, 255);
    textSize(20);
    text("Close", 85, 156);
    text("Open", 85, 178);
    text("Close", 85, 229);
    text("Open", 85, 251);
    fill(35, 145, 219);
    textSize(17);
    text("These two switches are said to be in \"parallel\", which simply means they are side-by-side rather than one after the other. Now what if we want it so that the light bulb only lights if either switch is closed but not if both are. We need the XOR (eXclusive OR) gate.", 20, 264, 360, 270);
    backButton();
};
var screen14 = function() {
    title("XOR Gate");
    textSize(17);
    text("A XOR gate is a logic gate where the output is true only if one input is true, if both are true the output isn't. Here is the symbol for a XOR gate:", 20, 115, 360, 270);
    drawXor(150, 188, 70);
    textSize(18);
    text("And this is what it looks like when it's made from electronic components:", 20, 270, 360, 270);
    xorCircuit(1, 1, 50, 375);
    backButton();
};
var screen15 = function() {
    title("XOR Gate");
    xorCircuit(0, 0, 50, 183);
    textSize(17);
    text("Now this one is a bit more complex, and may take a little more time to wrap your head around. But that's the fun of learning, right? You may have noticed that the switches aren't simply just closed or open anymore. It now looks like they are switching between two spots, usually called A and B. This is because the actual XOR gate uses the power of", 20, 210, 360, 270);
    backButton();
};
var screen16 = function() {
    title("XOR Gate");
    textSize(17);
    text("electromagentism through a solenoid to turn the switches. And actually, this is the case for all the other logic gates when built out of electronic components. This is so we don't have to use our fingers but can use electricity instead. But we'll be using switches to just show you the logic behind how these logic gates work, rather than elaborating on solenoids. You also may have noticed that one of the wires is blue. I made it blue to show you that the two wires are not connected and are completely separate from each other.", 20, 118, 360, 270);
    backButton();
};
var screen17 = function() {
    title("XOR Gate");
    xorCircuit(1, 0, 50, 179);
    textSize(17);
    text("Now the first switch is open and the second is closed. Current is able to pass through the middle wire into the light bulb.", 20, 205, 360, 270);
    xorCircuit(0, 1, 50, 325);
    text("Now the second switch is closed but the first isn't. Current can pass through the blue wire.", 20, 353, 360, 270);
    backButton();
};
var screen18 = function() {
    title("XOR Gate");
    xorCircuit(0, 0, 50, 179);
    textSize(17);
    text("Now that both switches are off they are connected to different wires and\ncan't reach the\nlight bulb.", 20, 205, 360, 270);
    xorCircuit(1, 1, 50, 310);
    text("Now with both on, the switches still are connected to two different wires and the light bulb still doesn't light.", 20, 333, 360, 270);
    backButton();
};
var screen19 = function() {
    title("XOR Gate");
    xorCircuit(s5try, s6try, 50, 210);
    rect(210, 110, 60, 23);
    rect(80, 145, 60, 23);
    fill(173, 31, 31);
    rect(210, 133, 60, 23);
    rect(80, 168, 60, 23);
    fill(255, 255, 255);
    textSize(20);
    text("Close", 215, 129);
    text("Open", 215, 150);
    text("Close", 85, 164);
    text("Open", 85, 185);
    fill(35, 145, 219);
    textSize(17);
    text("With all that we've learned so far about logic gates, we are now able to apply that knowledge to making half adders and full adders that are used by computers to add numbers in binary. These adders could also be built by NAND gates, but we'll be using these core gates instead. On to the half adder!", 20, 238, 360, 270);
    backButton();
};
var screen20 = function() {
    title("Half Adder");
    textSize(17);
    text("It has all come down to this, learning how computers add numbers. We start with the half adder. The half adder adds two binary digits. returning the result (either 0, 1, or 10) in its two outputs. The two outputs are called the carry (the tens digit) and the sum (the ones digit); the carry can be chained into a full adder to add more inputs. In the ALU of your CPU of your computer, you'll see something called a chained adder. A chained adder is a series of full adders linked up. In the following page I'll show you the architecture of the half adder.", 20, 115, 360, 270);
    backButton();
};
var screen21 = function() {
    title("Half Adder");
    halfAdder(1, 1, 20, 117);
    textSize(17);
    text("    This is a half adder.\n     It takes two binary\n     digits on top and\nadds them through the\nlogic gates shown. With\nthis it's able to output\nthe to added numbers\nin binary. Try changing\nthe inputs with the\nbuttons below:", 210, 130);
    backButton();
};
var screenDefault = function() {
    title("That's All !!!!!");
    textSize(25);
    text("Thanks for reading, I'm making many more examples!", 20, 210, 360, 80);
    backButton();
};

/* ------------ RENDERING ----------- */
mouseClicked = function() {
    if(slideNumber === 9 && mouseX >= 100 && mouseX <= 160 && mouseY >= 175 && mouseY <= 193) {
        s1try = 1;
    } else if(slideNumber === 9 && mouseX >= 100 && mouseX <= 160 && mouseY >= 194 && mouseY <= 221) {
        s1try = 0;
    } else if(slideNumber === 9 && mouseX >= 180 && mouseX <= 240 && mouseY >= 175 && mouseY <= 193) {
        s2try = 1;
    } else if(slideNumber === 9 && mouseX >= 180 && mouseX <= 240 && mouseY >= 194 && mouseY <= 221) {
        s2try = 0;
    } else if(slideNumber === 13 && mouseX >= 80 && mouseX <= 140 && mouseY >= 137 && mouseY <= 160) {
        s3try = 1;
    } else if(slideNumber === 13 && mouseX >= 80 && mouseX <= 140 && mouseY >= 161 && mouseY <= 182) {
        s3try = 0;
    } else if(slideNumber === 13 && mouseX >= 80 && mouseX <= 140 && mouseY >= 210 && mouseY <= 232) {
        s4try = 1;
    } else if(slideNumber === 13 && mouseX >= 80 && mouseX <= 140 && mouseY >= 233 && mouseY <= 255) {
        s4try = 0;
    } else if(slideNumber === 19 && mouseX >= 80 && mouseX <= 140 && mouseY >= 145 && mouseY <= 168) {
        s5try = 1;
    } else if(slideNumber === 19 && mouseX >= 80 && mouseX <= 140 && mouseY >= 169 && mouseY <= 192) {
        s5try = 0;
    } else if(slideNumber === 19 && mouseX >= 210 && mouseX <= 270 && mouseY >= 110 && mouseY <= 133) {
        s6try = 1;
    } else if(slideNumber === 19 && mouseX >= 210 && mouseX <= 270 && mouseY >= 134 && mouseY <= 157) {
        s6try = 0;
    } else if(slideNumber !== 0 && slideNumber <= numberOfSlides && mouseX >= 37 && mouseX <= 100 && mouseY >= 67 && mouseY <= 90) {
        slideNumber--;
    } else if(slideNumber > numberOfSlides && mouseX >= 37 && mouseX <= 100 && mouseY >= 67 && mouseY <= 90) {
        slideNumber = numberOfSlides;
    } else if(mouseButton === RIGHT && slideNumber !== 0 && slideNumber <= numberOfSlides) {
        slideNumber--;
    } else if(mouseButton === RIGHT && slideNumber > numberOfSlides) {
        slideNumber = numberOfSlides;
    } else {
        slideNumber++;
    }
};
draw = function() {
    background(220, 250, 247);
    var f = createFont("Segoe UI");
    textFont(f);
    switch(slideNumber) {
        case 0:
            screen00();
            break;
        case 1:
            screen01();
            break;
        case 2:
            screen02();
            break;
        case 3:
            screen03();
            break;
        case 4:
            screen04();
            break;
        case 5:
            screen05();
            break;
        case 6:
            screen06();
            break;
        case 7:
            screen07();
            break;
        case 8:
            screen08();
            break;
        case 9:
            screen09();
            break;
        case 10:
            screen10();
            break;
        case 11:
            screen11();
            break;
        case 12:
            screen12();
            break;
        case 13:
            screen13();
            break;
        case 14:
            screen14();
            break;
        case 15:
            screen15();
            break;
        case 16:
            screen16();
            break;
        case 17:
            screen17();
            break;
        case 18:
            screen18();
            break;
        case 19:
            screen19();
            break;
        case 20:
            screen20();
            break;
        case 21:
            screen21();
            break;
        default:
            screenDefault();
            break;
    }
};