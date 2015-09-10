/*
*
* Pokémon: Be The Beast
* By: KCF
*
*/
/*
*
* So the idea of this game is from the theme of the Ludum Dare #33: "You are the Monster"
* Except this time, it applies to Pokémon. You get to play the Pokémon. Isn't that Awesome!
* No longer are you stuck playing with a Pokémon trainer, you can now be free and roam around as the Pokémon.
* Now you may be yelling at the screen saying, "Pokémon aren't Monsters!" And that's true, they aren't.
* The Ludum Dare says to take the theme and see what it means to you and apply it to your game. So I used Pokémon because they're wild creatures!
* So what are you reading this text for? GET PLAYING! ^_^
*
*/

{

/* ----- VARIABLES ----- */
var level = 0;
var levels = [];
var pxSize = 4;
var gridSize = 32;
var currentPoke = "Pikachu";
var playerX = 0;
var playerY = 0;
var playerOrientation = "up";

/* ------- DECOR ------- */
var treeTop = function(x, y) {
    var thisArray = [
        "........",
        "........",
        "........",
        "..0000..",
        ".000000.",
        ".000000.",
        ".000000.",
        "..0000.."
    ];
    
    for (var i = 0; i < thisArray.length; i++) {
        var arrayIndex = thisArray[i]; // Index of the array
        for (var d = 0; d < thisArray[i].length; d++) {
            noStroke();
            var px = arrayIndex[d];
            if (px === ".") {
                noFill();
            } else if (px === "0") {
                fill(0, 255, 0);
            }
            rect((d * pxSize) + x, (i * pxSize) + y, pxSize, pxSize);
        }
    }
};
var treeTrunk = function(x, y) {
    var thisArray = [
        "...00...",
        "...00...",
        "...00...",
        "...00...",
        "...00...",
        "........",
        "........",
        "........"
    ];
    
    for (var i = 0; i < thisArray.length; i++) {
        var arrayIndex = thisArray[i]; // Index of the array
        for (var d = 0; d < thisArray[i].length; d++) {
            noStroke();
            var px = arrayIndex[d];
            if (px === ".") {
                noFill();
            } else if (px === "0") {
                fill(103, 47, 14);
            }
            rect((d * pxSize) + x, (i * pxSize) + y, pxSize, pxSize);
        }
    }
};

/* ------- PLAYER ------- */
var pikachu = function(x, y) {
    var thisArray = [
        "..1..1..",
        ".210012.",
        ".200002.",
        "..0000..",
        ".200002.",
        ".200002.",
        ".000100.",
        "..0100.."
    ];
    
    for (var i = 0; i < thisArray.length; i++) {
        var arrayIndex = thisArray[i]; // Index of the array
        for (var d = 0; d < thisArray[i].length; d++) {
            noStroke();
            var px = arrayIndex[d];
            if (px === ".") {
                noFill();
            } else if (px === "0") {
                fill(255, 255, 0);
            } else if (px === "1") {
                fill(0, 0, 0);
            } else if (px === "2") {
                fill(219, 219, 7);
            }
            rect((d * pxSize) + x, (i * pxSize) + y, pxSize, pxSize);
        }
    }
};
var player = function() {
    translate(playerX, playerY);
    switch(playerOrientation) {
        case "up":
            rotate(0);
            break;
        case "down":
            rotate(180);
            break;
        case "left":
            rotate(-90);
            break;
        case "right":
            rotate(90);
            break;
    }
    switch(currentPoke) {
        case "Pikachu":
            pikachu(-15, -15);
            break;
    }
    resetMatrix();
};

/* ------- LEVELS ------- */
var menu = function() {
    background(29, 166, 207);
    noStroke();
    fill(25, 153, 33);
    rect(0, height / 2, width, height / 2);
    fill(0, 0, 0);
    textSize(50);
    text("   Pokémon:\nBe The Beast", 48, 82 + sin(frameCount * 10) * 4);
    fill(71, 58, 194);
    text("   Pokémon:\nBe The Beast", 50, 80 + sin(frameCount * 10) * 4);
    fill(0, 0, 0);
    rect(103, 202, 200, 50, 20);
    fill(26, 97, 204);
    rect(105 + sin(frameCount * 10), 200 - sin(frameCount * 10), 200, 50, 20);
    fill(255, 255, 255);
    textSize(35);
    text("Play", 172 + sin(frameCount * 10), 236 - sin(frameCount * 10));
}; // Menu - Had no where else to put it
var newLevel = function(data, bgColor) {
    var myLevel = {
        data: data,
        bgColor: bgColor
    };
    levels.push(myLevel);
};
var displayLevel = function(levelNumber, x, y) {
    background(31, 171, 38);
    levelNumber--;
    background(levels[levelNumber].bgColor);
    for (var i = 0; i < levels[levelNumber].data.length; i++) {
        var arrayIndex = levels[levelNumber].data[i]; // Index of the array
        for (var d = 0; d < levels[levelNumber].data[i].length; d++) {
            var grid = arrayIndex[d];
            if (grid === "O") {
                treeTop(d * gridSize, i * gridSize);
            } else if (grid === "T") {
                treeTrunk(d * gridSize, i * gridSize);
            }
        }
    }
    player();
};
// Level 1
playerX = 150;
playerY = 150;
newLevel([
        "TT..........",
        "OO..........",
        "TT..........",
        "OO..........",
        "TT..........",
        "OO..........",
        "TT..........",
        "OO..........",
        "TT..........",
        "OO..........",
        "TT..........",
        "OO..........",
        "TT.........."
        ], color(31, 171, 38));

/* ----- RENDERING ----- */
keyPressed = function() {
    switch(level > 0) {
        case keyCode === 37:
            if(levels[level--].data) {
                playerOrientation = "left";
                playerX-=5;
            }
            break;
        case keyCode === 38:
            playerOrientation = "up";
            playerY-=5;
            break;
        case keyCode === 39:
            playerOrientation = "right";
            playerX+=5;
            break;
        case keyCode === 40:
            playerOrientation = "down";
            playerY+=5;
            break;
    }
};
mouseClicked = function() {
    switch(true) {
        case level === 0 && mouseX > 103 && mouseX < 305 + sin(frameCount * 10) && mouseY > 200 - sin(frameCount * 10) && mouseY < 252:
            level = 1;
            break;
    }
};
draw = function() {
    switch(level) {
        case 0: // Menu
            menu();
            break;
        case 1: // Level 1
            displayLevel(1, 0, 0);
            break;
    }
};

} // If you open this, the sky will fall on your head.