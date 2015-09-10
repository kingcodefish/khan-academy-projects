//  WIP(Work-In-Progress), MOVE ALONG NAYSAYERS!
/*
    I've been programming for MANY months, 6 or more years, and I have learned 66% of Intro to JS.
    I'm a 13-year-old homeschooled student, soon to go into tenth grade, and I've been markup-ing/scripting/programming since I was 6.
    I've been using Khan Academy for some math help to supplement my homeschooling curriculum.
    Recently, I decided to give Khan Academy's computer programming and computer science curriculum a try.
    So even though I'm not far through the Intro to JS course on here, I've had a lot more experience working on other things.
    I have 20 programming books and I am currently working on CODE: The Hidden Language of Computer Hardware and Software and The C Programming Language.
    The languages I work with include HTML, CSS, JS, PHP, MySQL, Java, C++, C, XML (Android), and a tiny itty-bitty teeny tiny bit of Python (Note I used the word bit :D).
    I hope to become a game developer using C++, OpenGL, SFML, etc.
    Be sure to check out my website at http://kingcodefish.com/
    
    Some credit goes to user Luggage on Stack Overflow, he helped me fix an annoying bug with comparing arrays that consist of object instances. Here is the link to his profile: http://stackoverflow.com/users/956900/luggage
*/

/*
    Changelog:
    v0.1 - Initial WIP release
    v0.2 - Added Randomization of Initial Cards
    v0.3 - Optimized Object Card Calling
    v0.4 - Added Asking of Cards - CURRENTLY UNDERWAY
*/

/*
    This is a game that will feature 13 different Khan Academy-themed cards. They will be multiplied by 4 and put into a deck of 52. The player can then play a game of Go Fish with Winston, Hopper, and Oh Noes. This game will feature all aspects of the real game. So here goes nothing! :D
*/

/* ------------- INITIALIZE VARIABLES ---------- */
var slideNumber = 1;
var popup = false;
var popup2 = true;
var cardDeck = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12];
var playerCards = [];
var winstonCards = [];
var ebCards = [];
var hopperCards = [];
var matches = 0;
var turn = "Player";
var pickPlayer = "";
var pickedPlayer = true;
var pickedCard = true;
var correctGuess = null;
var correctCards = 0;
var wrongCards = 0;
var waitDelay = 80;
var fishAnim = 1;
var fishTyping = true;

/* ------------- CARD OBJECTS/FUNCTIONS -------- */
// Backing of Cards - Borrowed from my Emoji contest-winning entry, so still original
var drawKA = function(x, y, logoSize) {
    var leafSize = logoSize;
    var f = createFont("fantasy");
    
    image(getImage("avatars/leaf-green"), x, y, leafSize, leafSize); // Leaf Picture
    textFont(f, logoSize / 1.2);
    text("KA", x + logoSize / 1.1, y + logoSize / 1.25); // KA Text
    fill(0, 0, 0);
    
    // Reset Font
    var f = createFont("sans-serif");
    textFont(f);
};

// Base Card Object
var Card = function(x, y, cardSize, img, title) {
    this.x = x;
    this.y = y;
    this.cardSize = cardSize;
    this.img = img;
    this.title = title;
};
Card.prototype.drawBack = function() {
    fill(204, 45, 58);
    stroke(255, 255, 255);
    strokeWeight(this.cardSize * 1/12);
    rect(this.x, this.y, this.cardSize, this.cardSize + this.cardSize * 2/5, this.cardSize * 1/5);
    fill(0, 0, 0);
    drawKA(this.x + this.cardSize * 1/10, this.y + this.cardSize * 1/2, this.cardSize * 2/5, this.cardSize * 2/5);
};
Card.prototype.draw = function() {
    fill(255, 255, 255);
    stroke(230, 230, 230);
    strokeWeight(this.cardSize * 1/12);
    rect(this.x, this.y, this.cardSize, this.cardSize + this.cardSize * 2/5, this.cardSize * 1/5);
    image(this.img, this.x + this.cardSize / 1/4, this.y + this.cardSize * 5/12, this.cardSize * 3/5, this.cardSize * 3/5);
};

/* ---------- OTHER OBJECTS/FUNCTIONS ---------- */
var drawKCFLogo = function(x, y, logoSize) {
    fill(0, 0, 0);
    rect(x, y, logoSize, logoSize);
    
    fill(32, 176, 0);
    textSize(logoSize * 9/32);
    if(fishAnim * 20 > 65) {
        text("<’’)))>{", x + logoSize * 1/16, y + logoSize * 9/16);
        fishTyping = false;
    } else if(fishAnim * 20 > 60) {
        text("<’’)))>", x + logoSize * 3/16, y + logoSize * 9/16);
    } else if(fishAnim * 20 > 55) {
        text("<’’)))", x + logoSize * 11/32, y + logoSize * 9/16);
    } else if(fishAnim * 20 > 50) {
        text("<’’))", x + logoSize * 7/16, y + logoSize * 9/16);
    } else if(fishAnim * 20 > 45) {
        text("<’’)", x + logoSize * 17/32, y + logoSize * 9/16);
    } else if(fishAnim * 20 > 40) {
        text("<’’", x + logoSize * 10/16, y + logoSize * 9/16);
    } else if(fishAnim * 20 > 35) {
        text("<’", x + logoSize * 11/16, y + logoSize * 9/16);
    } else if(fishAnim * 20 > 30) {
        text("<", x + logoSize * 12/16, y + logoSize * 9/16);
    }
    if(fishAnim % 2 < 1 && !fishTyping) {
        fill(0, 0, 0);
    }
    rect(x + logoSize * 15/16, y + logoSize * 85/256, logoSize * 1/40, logoSize * 5/16);
    fishAnim += 0.025;
};
var checkBooks = function(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    if(b.indexOf(4) >= 0) {
        matches++;
    }
};
var shuffle = function(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};

/* ------------- INITIALIZING CARDS -------------- */
var winston = new Card();
winston.img = getImage("creatures/Winston");
var marcimus = new Card();
marcimus.img = getImage("avatars/marcimus");
var orange = new Card();
orange.img = getImage("avatars/orange-juice-squid");
var johnny = new Card();
johnny.img = getImage("avatars/robot_male_3");
var spice = new Card();
spice.img = getImage("avatars/old-spice-man");
var pants = new Card();
pants.img = getImage("avatars/mr-pants");
var pi = new Card();
pi.img = getImage("avatars/purple-pi");
var pink = new Card();
pink.img = getImage("avatars/mr-pink");
var amelia = new Card();
amelia.img = getImage("avatars/robot_female_3");
var leafers = new Card();
leafers.img = getImage("avatars/leafers-ultimate");
var piceratops = new Card();
piceratops.img = getImage("avatars/piceratops-ultimate");
var aqualine = new Card();
aqualine.img = getImage("avatars/aqualine-ultimate");
var spunky = new Card();
spunky.img = getImage("avatars/spunky-sam");

/* ---------- STUFF THAT NEEDS TO BE DONE BUT NOT ON EVERY FRAME -------- */
for(var i = 0; i < cardDeck.length; i++) {
    switch(cardDeck[i]) {
        case 0:
            cardDeck[i] = winston;
            break;
        case 1:
            cardDeck[i] = marcimus;
            break;
        case 2:
            cardDeck[i] = orange;
            break;
        case 3:
            cardDeck[i] = johnny;
            break;
        case 4:
            cardDeck[i] = spice;
            break;
        case 5:
            cardDeck[i] = pants;
            break;
        case 6:
            cardDeck[i] = pi;
            break;
        case 7:
            cardDeck[i] = pink;
            break;
        case 8:
            cardDeck[i] = amelia;
            break;
        case 9:
            cardDeck[i] = leafers;
            break;
        case 10:
            cardDeck[i] = piceratops;
            break;
        case 11:
            cardDeck[i] = aqualine;
            break;
        case 12:
            cardDeck[i] = spunky;
            break;
    }
}
cardDeck = shuffle(cardDeck);
for(var i = 0; i < 5; i++) {
    var a = cardDeck.pop();
    playerCards[i] = a;
    var b = cardDeck.pop();
    hopperCards[i] = b;
    var c = cardDeck.pop();
    winstonCards[i] = c;
    var d = cardDeck.pop();
    ebCards[i] = d;
}

/* ------------------ SLIDES ------------------- */
var slide1 = function() {
    fill(247, 255, 0);
    textSize(35);
    text("A Game of Go Fish!", 45, 50);
    
    // Play! Button
    fill(41, 65, 138);
    noStroke();
    rect(150, 160, 100, 40, 20);
    textSize(25);
    fill(247, 255, 0);
    text("Play!", 173, 190);
    
    // My Logo ^_^
    drawKCFLogo(350, 350, 50);
};
var slide2 = function() {
    fill(247, 255, 0);
    noStroke();
    textSize(35);
    
    // The Table
    fill(102, 51, 0);
    rect(20, 20, 360, 360, 20);
    
    // The Players
    image(getImage("creatures/Winston"), 175, 30, 50, 50);
    image(getImage("creatures/OhNoes"), 30, 175, 50, 50);
    image(getImage("creatures/Hopper-Happy"), 320, 175, 50, 50);
    
    // Card Deck
    var cardDeckDisplay = new Card(175, 175, 50);
    cardDeckDisplay.drawBack();
    
    // Books in top-left corner
    fill(247, 255, 0);
    text("Books: " + matches, 30, 45);
    
    // Cards Displayed
    for(var i = 0; i < winstonCards.length; i++) {
        translate((400 - winstonCards.length * 10) / 2 + 15 + i * 10, 115);
        rotate(180);
        winstonCards[i].x = 0;
        winstonCards[i].y = 0;
        winstonCards[i].cardSize = 20;
        winstonCards[i].drawBack();
        resetMatrix();
    }
    for(var i = 0; i < ebCards.length; i++) {
        translate(115, (400 - ebCards.length * 10) / 2 - 5 + i * 10);
        rotate(90);
        ebCards[i].x = 0;
        ebCards[i].y = 0;
        ebCards[i].cardSize = 20;
        ebCards[i].drawBack();
        resetMatrix();
    }
    for(var i = 0; i < hopperCards.length; i++) {
        translate(285, (400 - hopperCards.length * 10) / 2 + 15 + i * 10);
        rotate(-90);
        hopperCards[i].x = 0;
        hopperCards[i].y = 0;
        hopperCards[i].cardSize = 20;
        hopperCards[i].drawBack();
        resetMatrix();
    }
    for(var i = 0; i < playerCards.length; i++) {
        playerCards[i].x = (400 - playerCards.length * 30) / 2 - 20+ i * 35;
        playerCards[i].y = 320;
        playerCards[i].cardSize = 30;
        playerCards[i].draw();
    }
    
    // Check for books
    checkBooks(playerCards);
    
    // Turn-based gameplay lol
    textSize(20);
    fill(247, 255, 0);
    if(turn === "Player") {
        if(correctGuess === null) {
            if(pickPlayer === "") {
                text("It's Your Turn", 140, 270);
                text("Who will you ask? Click on a player.", 42, 300);
            } else if(pickPlayer === "EB") {
                text("You picked EB!", 130, 270);
                textSize(17);
                text("What card will you ask him for?\n            Click one below.", 80, 290);
                textSize(20);
            } else if(pickPlayer === "Winston") {
                text("You picked Winston!", 107, 270);
                textSize(17);
                text("What card will you ask him for?\n            Click one below.", 80, 290);
                textSize(20);
            } else if(pickPlayer === "Hopper") {
                text("You picked Hopper!", 110, 270);
                textSize(17);
                text("What card will you ask him for?\n            Click one below.", 80, 290);
                textSize(20);
            }
        } else if(correctGuess) {
            text("You were correct! Ask again!", 72, 290);
        } else if(!correctGuess) {
            text("Go Fish!!!", 160, 290);
        }
    } else if(turn === "EB") {
        if(correctGuess === null) {
            if(!pickedPlayer) {
                var number = round(random(1, 3));
                if(number === 1) {
                    pickPlayer = "Player";
                } else if(number === 2) {
                    pickPlayer = "Winston";
                } else if(number === 3) {
                    pickPlayer = "Hopper";
                }
                pickedPlayer = true;
                waitDelay = 80;
            }
            if(!pickedCard) {
                var randomNumber = round(random(0, ebCards.length));
                switch(pickPlayer) {
                    case "Player":
                        if(playerCards.indexOf(ebCards[randomNumber]) >= 0) {
                            correctGuess = true;
                            playerCards.splice(playerCards.indexOf(ebCards[randomNumber]), 1);
                            ebCards.push(ebCards[randomNumber]);
                        } else if(playerCards.indexOf(ebCards[randomNumber]) < 0) {
                            correctGuess = false;
                            waitDelay = 80;
                        }
                        pickedPlayer = true;
                        break;
                    case "Winston":
                        if(winstonCards.indexOf(ebCards[randomNumber]) >= 0) {
                            correctGuess = true;
                            winstonCards.splice(winstonCards.indexOf(ebCards[randomNumber]), 1);
                            ebCards.push(ebCards[randomNumber]);
                        } else if(winstonCards.indexOf(winstonCards[randomNumber]) < 0) {
                            correctGuess = false;
                            waitDelay = 80;
                        }
                        pickedPlayer = true;
                        break;
                    case "Hopper":
                        if(hopperCards.indexOf(ebCards[randomNumber]) >= 0) {
                            correctGuess = true;
                            hopperCards.splice(hopperCards.indexOf(ebCards[randomNumber]), 1);
                            ebCards.push(ebCards[randomNumber]);
                        } else if(hopperCards.indexOf(hopperCards[randomNumber]) < 0) {
                            correctGuess = false;
                            waitDelay = 80;
                        }
                        pickedPlayer = true;
                        break;
                }
                pickedCard = true;
            }
            if(pickPlayer === "") {
                text("It's EB's Turn", 140, 290);
                waitDelay--;
                if(waitDelay === 0) {
                    pickedPlayer = false;
                    waitDelay = 120;
                }
            } else if(pickPlayer === "Player") {
                text("EB picked You!", 130, 270);
                textSize(17);
                text("He is thinking of a card to ask\n                   you for.", 85, 290);
                waitDelay--;
                if(waitDelay === 79) {
                    pickedCard = false;
                }
                textSize(20);
            } else if(pickPlayer === "Winston") {
                text("EB picked Winston!", 107, 270);
                textSize(17);
                text("He is thinking of a card to ask\n                Winston for.", 85, 290);
                waitDelay--;
                if(true) {
                    pickedCard = false;
                }
                textSize(20);
            } else if(pickPlayer === "Hopper") {
                text("EB picked Hopper!", 110, 270);
                textSize(17);
                text("He is thinking of a card to ask\n                Hopper for.", 85, 290);
                waitDelay--;
                if(true) {
                    pickedCard = false;
                }
                textSize(20);
            }
        } else if(!correctGuess) {
            text("EB guessed incorrectly!", 95, 290);
            waitDelay--;
            if(waitDelay === 0) {
                turn = "Winston";
                pickPlayer = "";
                correctGuess = null;
                waitDelay = 120;
            }
        } else if(correctGuess) {
            text("EB guessed correctly!", 100, 290);
            waitDelay--;
            if(waitDelay === 0) {
                turn = "Winston";
                pickPlayer = "";
                correctGuess = null;
                waitDelay = 120;
            }
        }
    } else if(turn === "Winston") {
        if(correctGuess === null) {
            if(pickPlayer === "") {
                text("It's Winston's Turn", 120, 290);
                waitDelay--;
                if(waitDelay === 0) {
                    pickedPlayer = false;
                    waitDelay = 120;
                }
            }
        }
    }
};

mouseClicked = function() {
    if(slideNumber === 1 && mouseX > 150 && mouseX < 250 && mouseY > 160 && mouseY < 200) {
        slideNumber = 2;
    } else if(slideNumber === 1 && mouseX > 350 && mouseY > 350 && !popup) {
        popup = true;
        popup2 = true;
    } else if(slideNumber === 1 && mouseX > 350 && mouseY > 350 && popup) {
        popup = false;
    } else if(slideNumber === 2 && turn === "Player" && mouseX > 30 && mouseX < 80 && mouseY > 175 && mouseY < 225) {
        pickPlayer = "EB";
    } else if(slideNumber === 2 && turn === "Player" && mouseX > 175 && mouseX < 225 && mouseY > 30 && mouseY < 80) {
        pickPlayer = "Winston";
    } else if(slideNumber === 2 && turn === "Player" && mouseX > 320 && mouseX < 370 && mouseY > 175 && mouseY < 225) {
        pickPlayer = "Hopper";
    } else if(slideNumber === 2 && turn === "Player" && pickPlayer === "EB" && correctGuess !== false && mouseX > 0 && mouseX < 400 && mouseY > 320 && mouseY < 361) {
        var length = (400 - playerCards.length * 30) / 2 - 20;
        for(var i = 0; i < playerCards.length; i++) {
            if(mouseX > length + i * 35 && mouseX < length + i * 35 + 30) {
                if(ebCards.indexOf(playerCards[i]) >= 0) {
                    correctGuess = true;
                    ebCards.splice(ebCards.indexOf(playerCards[i]), 1);
                    playerCards.push(playerCards[i]);
                } else if(ebCards.indexOf(playerCards[i]) < 0) {
                    correctGuess = false;
                }
            }
        }
    } else if(slideNumber === 2 && turn === "Player" && correctGuess === false && mouseX > 175 && mouseX < 225 && mouseY > 175 && mouseY < 245) {
        playerCards.push(cardDeck.pop());
        correctGuess = null;
        turn = "EB";
        pickPlayer = "";
    }
};
draw = function() {
    background(46, 156, 230);
    switch(slideNumber) {
        case 1:
            slide1();
            break;
        case 2:
            slide2();
            break;
    }
    if(popup) {
        fill(204, 204, 204);
        rect(97, 137, 276, 136, 20);
        fill(255, 255, 255);
        rect(100, 140, 270, 130, 20);
        image(getImage("creatures/Winston"), 10, 168, 80, 80);
        fill(0, 0, 0);
        text("Winston ate too many donuts. Must give you a link to my programs: Click the logo again to close this pop-up.", 110, 170, 270, 150);
        if(popup2) {
            println("https://www.khanacademy.org/profile/kingcodefish/projects");
            popup2 = false;
        }
    }
};