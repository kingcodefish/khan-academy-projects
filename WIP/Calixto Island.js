/**
 * ██╗  ██╗██╗███╗   ██╗ ██████╗  ██████╗ ██████╗ ██████╗ ███████╗███████╗██╗███████╗██╗  ██╗
 * ██║ ██╔╝██║████╗  ██║██╔════╝ ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝██║██╔════╝██║  ██║
 * █████╔╝ ██║██╔██╗ ██║██║  ███╗██║     ██║   ██║██║  ██║█████╗  █████╗  ██║███████╗███████║
 * ██╔═██╗ ██║██║╚██╗██║██║   ██║██║     ██║   ██║██║  ██║██╔══╝  ██╔══╝  ██║╚════██║██╔══██║
 * ██║  ██╗██║██║ ╚████║╚██████╔╝╚██████╗╚██████╔╝██████╔╝███████╗██║     ██║███████║██║  ██║
 * ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝
 * - ⠠⠠⠉⠕⠙⠑⠀⠠⠠⠊⠎⠀⠠⠠⠏⠕⠑⠞⠗⠽ - C O D E  I S  P O E T R Y - -.-. --- -.. .   .. ...   .--. --- . - .-. -.-- -
 */

/**
 *
 * I've been programming 84+ months and completed 100% of Intro to JS, 75% of Games & Visualizations, and 40% of Natural Simulations.
 * I'm recreating a game called Calixto Island made in 1981 for the Tandy CoCo by Mark Data Products.
 * This was a game that my dad played on his TRS-80 as a kid.
 * Here's a bit more information about it: http://www.mobygames.com/game/calixto-island
 * It wasn't a super popular game, so there currently is no Wikipedia article on it.
 * It can be played on the Java version of the CoCo emulator found here: http://www.haplessgenius.com/mocha/mocha_original.html
 * It currently hasn't been added support for in the latest Mocha HTML5, so I can't link you there.
 *
 * The only thing different in this game from the original is that it's remastered, it makes it easier to draw.
 *
 */

var scene = "menu";
var logoDesign1X = [];
var logoDesign2X = [];
var logoDesignFill = true;

var logoDesign = function(c) {
    c.background(0, 0, 0, 0);
    c.noStroke();

    // Top Designs
    c.fill(0, 0, 0);
    c.rect(0, 4, 2, 2);
    c.rect(2, 4, 2, 2);
    c.rect(4, 4, 2, 2);
    c.rect(2, 2, 2, 2);
    c.rect(4, 2, 2, 2);
    c.rect(6, 0, 2, 2);
    c.rect(8, 0, 2, 2);
    c.fill(255, 255, 255);
    c.rect(2, 0, 1, 2);
    c.rect(4, 0, 2, 2);
    c.rect(0, 2, 2, 2);

    // Bottom Designs
    c.fill(0, 0, 0);
    c.rect(6, 15, 2, 2);
    c.rect(4, 15, 2, 2);
    c.rect(2, 15, 2, 2);
    c.rect(6, 17, 2, 2);
    c.rect(4, 17, 2, 2);
    c.rect(4, 15, 2, 2);
    c.rect(0, 19, 2, 2);
    c.rect(2, 19, 2, 2);
    c.fill(255, 255, 255);
    c.rect(2, 17, 2, 2);
    c.rect(0, 17, 1, 2);
    c.rect(-2, 19, 2, 2);

    return c;
};
var logoBluePattern = function(c) {
    c.background(0, 0, 0, 0);
    c.noStroke();

    c.fill(60, 126, 240);
    for(var i = 0; i < 408; i += 8) {
        for(var j = 0; j < 100; j += 2) {
            if(j % 4 === 0) {
                c.rect(106 + i, 200 + j, 2, 2);
            } else {
                c.rect(102 + i, 200 + j, 2, 2);
            }
        }
    }

    return c;
};
var logoOrangePattern = function(c) {
    c.background(0, 0, 0, 0);
    c.noStroke();

    c.fill(255, 119, 0);
    for(var i = 0; i < 408; i += 8) {
        for(var j = 0; j < 24; j += 2) {
            if(j % 4 === 0) {
                c.rect(106 + i, 194 + j, 2, 2);
            } else {
                c.rect(102 + i, 194 + j, 2, 2);
            }
        }
    }

    return c;
};
var cacheImage = function(imgFunction, w, h) {
    var c = createGraphics(w, h, JAVA2D);
    if(!c) {
        return;
    }

    c = imgFunction(c);

    return(c.get());
};
var logoDesign = cacheImage(logoDesign, 20, 40);
var logoBluePattern = cacheImage(logoBluePattern, width, height);
var logoOrangePattern = cacheImage(logoOrangePattern, width, height);

var pixelText = function(text, x, y, size) {
    var pixelGrid = "";
    var newlineCount = 0;
    var pixelTextX = x;
    var data = {
        "A": "01110100011000110001111111000110001",
        "B": "11110100011000111110100011000111110",
        "C": "01111100001000010000100001000001111",
        "D": "11110100011000110001100011000111110",
        "E": "11111100001000011111100001000011111",
        "F": "11111100001000011111100001000010000",
        "G": "01111100001000010011100011000101111",
        "H": "10001100011000111111100011000110001",
        "I": "01110001000010000100001000010001110",
        "J": "00001000010000100001000010000111110",
        "K": "10001100101010011000101001001010001",
        "L": "10000100001000010000100001000011111",
        "M": "10001110111010110001100011000110001",
        "N": "10001110011010110011100011000110001",
        "O": "01110100011000110001100011000101110",
        "P": "11110100011000110001111101000010000",
        "Q": "0111001000101000101000101000101000100111",
        "R": "11110100011000110001111101000110001",
        "S": "01110100011000001110000011000101110",
        "T": "11111001000010000100001000010000100",
        "U": "10001100011000110001100011000101110",
        "V": "10001100011000110001100010101000100",
        "W": "10001100011000110001101011101110001",
        "X": "10001100010101000100010101000110001",
        "Y": "10001100011000101110001000010000100",
        "Z": "11111000010001000100010001000011111",
        "a": "00000000000110000010011101001001110",
        "b": "10000100001110010010100101001011100",
        "c": "00000000000111010000100001000001110",
        "d": "00010000100111010010100101001001110",
        "e": "00000000000110010010111101000001110",
        "f": "00110010001111001000010000100001000",
        "g": "0000000000011101001010010011100001011100",
        "h": "10000100001110010010100101001010010",
        "i": "00100000000010000100001000010000100",
        "j": "00010000000001000010000100001001100",
        "k": "01000010000100101010011000101001001",
        "l": "00100001000010000100001000010000100",
        "m": "00000000001101010101101011010110001",
        "n": "00000000000111001001010010100101001",
        "o": "00000000000011001001010010100100110",
        "p": "0000000000011100100101001010010111001000",
        "q": "0000000000001110100101001010010011100001",
        "r": "00000000000101101100010000100001000",
        "s": "00000000000011101000001100000101110",
        "t": "00100001000111100100001000010000011",
        "u": "00000000000100101001010010100100111",
        "v": "00000000001000110001100010101000100",
        "w": "00000000001000110101101011010101010",
        "x": "00000000001000101010001000101010001",
        "y": "000000000001001010010100101001001110000101110",
        "z": "00000000001111100010001000100011111",
        "0": "01110100011001110101110011000101110",
        "1": "00110000100001000010000100001000010",
        "2": "11110000010000101110100001000011111",
        "3": "11110000010000111110000010000111110",
        "4": "00011001010100110001111110000100001",
        "5": "11111100001000011110000010000111110",
        "6": "01110100001000011110100011000101110",
        "7": "11111000010001000010001000010000100",
        "8": "01110100011000101110100011000101110",
        "9": "01110100011000101111000010000101110",
        ".": "00000000000000000000000000110001100",
        ",": "00000000000000000000000000010001100",
        "'": "00100011000000000000000000000000000",
        "!": "00100001000010000100001000000000100",
        ":": "00000000000000000100000000000000100",
        "?": "11100000100001000100010000000001000",
        "&": "00000010001010001000101011001001101",
        "©": "0111010001101111100111001101111000101110",
        " ": " "
    };

    for(var m = 0; m < text.length; m++) {
        if(text[m] !== "\n") {
            pixelGrid = data[text[m]];
            pixelGrid = pixelGrid.match(/.{1,5}/g);
            for(var i = 0; i < pixelGrid.length; i++) {
                for(var j = 0; j < pixelGrid[i].length; j++) {
                    if(pixelGrid[i][j] === "1") {
                        rect(x + (j * size / 10) + pixelTextX, y + i * size / 10 + (newlineCount * (size / 10 * 9)), size / 10, size / 10);
                    }
                }
            }
            pixelTextX += (size / 10 * 6);
        } else {
            newlineCount++;
            pixelTextX = x;
        }
    }
};
// Sadly this can't be done with imageData, stay too long and it crashes your browser.
var Logo = {
    draw: function() {
        // If first time rendering, populate the design x's for the logo
        if(logoDesignFill) {
            for(var i = 0; i < 400; i += 16) {
                logoDesign1X.push(i + 100);
                logoDesign2X.push(i + 100);
            }
            logoDesignFill = false;
        }

        fill(204, 233, 245);
        rect(306, 250, 408, 100);
        image(logoBluePattern, 0, 0);

        fill(255, 255, 255);
        arc(300, 300, 375, 155, 180, 360);
        fill(252, 123, 10);
        arc(300, 300, 370, 150, 180, 360);

        fill(80, 103, 199);
        rect(306, 288, 408, 10);

        fill(0, 0, 0);
        pixelText("C", 92, 240, 50);
        pixelText("ALIXTO", 105, 253, 30);
        pixelText("I", 164, 240, 50);
        pixelText("SLAND", 175, 253, 30);

        beginShape();
        vertex(500, 300);
        vertex(400, 300);
        bezierVertex(480, 282, 460, 283, 500, 283);
        endShape();
        beginShape();
        vertex(464, 286);
        bezierVertex(455, 257, 457, 264, 438, 234);
        bezierVertex(430, 235, 430, 235, 427, 242);
        bezierVertex(426, 232, 430, 230, 437, 228);
        vertex(437, 225);
        bezierVertex(427, 229, 427, 229, 422, 234);
        bezierVertex(425, 223, 425, 223, 433, 218);
        vertex(450, 218);
        bezierVertex(459, 223, 459, 223, 464, 233);
        vertex(461, 233);
        bezierVertex(455, 229, 455, 229, 447, 226);
        vertex(447, 227);
        bezierVertex(453, 231, 453, 231, 460, 236);
        vertex(458, 238);
        bezierVertex(451, 234, 451, 234, 447, 233);
        vertex(447, 238);
        bezierVertex(461, 257, 461, 257, 472, 283);
        endShape();

        fill(255, 234, 0);
        rect(306, 205, 408, 25);
        rect(306, 305, 408, 25);

        image(logoOrangePattern, 0, 0);
        image(logoOrangePattern, 0, 100);

        fill(0, 0, 0);
        rect(306, 194, 408, 2);
        rect(306, 217, 408, 2);
        rect(306, 294, 408, 2);
        rect(306, 317, 408, 2);

        // Loop through the design 1 x's and draw them and move them
        for(var i = 0; i < logoDesign1X.length; i++) {
            image(logoDesign, logoDesign1X[i], 195);

            if(logoDesign1X[i] <= 100) {
                logoDesign1X[i] = 100 + 400;
            } else if(frameCount % 4 === 0) {
                logoDesign1X[i] -= 4;
            }
        }
        // Loop through the design 2 x's and draw them and move them
        for(var i = 0; i < logoDesign2X.length; i++) {
            image(logoDesign, logoDesign2X[i], 295);

            if(logoDesign2X[i] >= 100 + 400) {
                logoDesign2X[i] = 100;
            } else if(frameCount % 4 === 0) {
                logoDesign2X[i] += 4;
            }
        }

        fill(255, 255, 255);
        rect(100, 250, 10, 150);
        rect(508, 250, 20, 150);
    }
};


var menu = function() {
    // Menu Information
    // Blur Effect
    fill(255, 201, 255);
    pushMatrix();
    translate(3, 0);
    pixelText("MARK DATA PRODUCTS", 100, 100, 20);
    pixelText("presents", 133, 133, 20);
    pixelText("By:", 150, 353, 20);
    pixelText("Bob Withers & Stephen O'Dea", 90, 400, 20);
    pixelText("Copyright © 1981", 113, 462, 20);
    pixelText("Mark Data Products", 107, 484, 20);
    pixelText("All Rights Reserved", 108, 504, 20);
    popMatrix();

    fill(84, 118, 240);
    pixelText("MARK DATA PRODUCTS", 100, 100, 20);
    pixelText("presents", 133, 133, 20);
    pixelText("By:", 150, 353, 20);
    pixelText("Bob Withers & Stephen O'Dea", 90, 400, 20);
    pixelText("Copyright © 1981", 113, 462, 20);
    pixelText("Mark Data Products", 107, 484, 20);
    pixelText("All Rights Reserved", 108, 504, 20);

    // Menu Logo
    Logo.draw();
};
var game = function() {
};

var setLoopThrowTimer = function() {
    this[["KAInfiniteLoopSetTimeout"][0]](40000);
};
setLoopThrowTimer();
draw = function() {
    // Initial Settings
    background(255, 255, 255);
    strokeWeight(1);
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    //noLoop();

    switch(scene) {
        case "menu":
            menu();
            break;
        case "game":
            game();
            break;
    }
};
mouseClicked = function() {
    //println(mouseX + ", " + mouseY);
};