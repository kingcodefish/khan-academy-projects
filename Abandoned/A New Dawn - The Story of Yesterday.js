/****************************************************************
 *                                                              *
 *                                                              *
 *            A New Dawn - The Story of Yesterday               *
 *                          By: KCF                             *
 *                                                              *
 *                                                              *
 ****************************************************************/
 
/**
 * 
 * Want some background music to listen to while playing? Check this out: https://www.youtube.com/watch?v=rCZi3krpy-A
 * 
 * 
 * This project was started on:
 *          8/29/2015
 * 
 */

/* ----------- VARIABLES ---------- */
var slideNumber = 0;
var fade = 0;
var fadeInOut = false;
var keys = [];
var textScroller = "";
var textFill = "";
var textEff = 0;
var textFade = 255;
var waitDelay = 25;

/* -------- Awesome Font - A Font Built With DY's Font API -------- */
var Char=function(id,len,render){this.id=id;this.width=len;this.draw=render;};var currentMyText={font:undefined,fill:color(0,0,0),size:30,weight:3,xAlign:LEFT,yAlign:BASELINE,trailSpace:2,leading:33};var MyFont=function(naturalHeight,parts,characterInfo){this.naturalHeight=naturalHeight;this.naturalHeightHalf=naturalHeight / 2;this.parts=parts;this.characterInfo=characterInfo;};var awesomeFont=new MyFont(25,{horizontalLine:function(w,y){line(0,y,w,y);},verticalLine:function(x,h){h=h?h:awesomeFont.naturalHeight;line(x,-h / 2,x,h / 2);},leftLine:function(){awesomeFont.parts.verticalLine(0);},topLine:function(w){awesomeFont.parts.horizontalLine(w,-awesomeFont.naturalHeightHalf);},bottomLine:function(w){awesomeFont.parts.horizontalLine(w,awesomeFont.naturalHeightHalf);},bigO:function(w){ellipse(8,0,w,awesomeFont.naturalHeight);},period:function(){ellipse(0,awesomeFont.naturalHeightHalf,1,1);}},[new Char("placeholder",16,function(){strokeWeight(2);point(0,-awesomeFont.naturalHeightHalf);point(0,0);point(0,awesomeFont.naturalHeightHalf);point(this.width / 2,awesomeFont.naturalHeightHalf);point(this.width,-awesomeFont.naturalHeightHalf);point(this.width,0);point(this.width,awesomeFont.naturalHeightHalf);point(this.width / 2,-awesomeFont.naturalHeightHalf);}),new Char(" ",2,function(b){}),new Char(".",2,function(b){awesomeFont.parts.period();}),new Char(":",2,function(b){ellipse(0,-3,1,1);awesomeFont.parts.period();}),new Char("'",0,function(b){line(1,-awesomeFont.naturalHeightHalf,0,-awesomeFont.naturalHeightHalf+3);}),new Char("\"",4,function(b){line(1,-awesomeFont.naturalHeightHalf,0,-awesomeFont.naturalHeightHalf+3);line(5,-awesomeFont.naturalHeightHalf,4,-awesomeFont.naturalHeightHalf+3);}),new Char(",",0,function(b){line(1,awesomeFont.naturalHeightHalf,0,awesomeFont.naturalHeightHalf+3);}),new Char("!",2,function(b){line(0,-awesomeFont.naturalHeightHalf,0,6);awesomeFont.parts.period();}),new Char("_",10,function(b){awesomeFont.parts.bottomLine(this.width);}),new Char("|",1,function(b){line(0,-awesomeFont.naturalHeightHalf-1,0,awesomeFont.naturalHeightHalf+1);}),new Char("-",10,function(b){line(0,0,10,0);}),new Char("+",10,function(b){line(0,0,10,0);line(5,-5,5,5);}),new Char("*",12,function(b){line(0,0,12,0);line(3,-5,9,5);line(9,-5,3,5);}),new Char("&",11,function(b){line(2,-3,12,awesomeFont.naturalHeightHalf);arc(6,-6.25,10,11.5,155,270);arc(6,-8.25,7,7.5,-90,45);line(8,-5,0,3);arc(4,7,11,11.5,90,225);arc(4,2.75,16,20,20,90);}),new Char("A",14,function(b){line(7,-awesomeFont.naturalHeightHalf,0,awesomeFont.naturalHeightHalf);line(3,5,10,5);line(8,-awesomeFont.naturalHeightHalf,14,awesomeFont.naturalHeightHalf);}),new Char("B",11,function(b){awesomeFont.parts.leftLine();line(0,-awesomeFont.naturalHeightHalf,6,-awesomeFont.naturalHeightHalf);line(0,0,8,0);line(0,awesomeFont.naturalHeightHalf,7,awesomeFont.naturalHeightHalf);arc(6,-6,8,12,-65,65);arc(5,6,15,14,-65,65);}),new Char("C",15,function(b){arc(8+b / 2,0,17,26,50,310);}),new Char("D",13,function(b){awesomeFont.parts.leftLine();arc(0,0.5,26,26,-90,90);}),new Char("E",12,function(b){awesomeFont.parts.leftLine();awesomeFont.parts.topLine(this.width);awesomeFont.parts.horizontalLine(10);awesomeFont.parts.bottomLine(this.width);}),new Char("F",12,function(b){awesomeFont.parts.leftLine();awesomeFont.parts.topLine(this.width);awesomeFont.parts.horizontalLine(10);}),new Char("G",16,function(b){arc(8,0,this.width,awesomeFont.naturalHeight,10,320);line(this.width-6,2,this.width,2);}),new Char("H",14,function(b){awesomeFont.parts.leftLine();awesomeFont.parts.horizontalLine(this.width);awesomeFont.parts.verticalLine(14);}),new Char("I",1,function(b){awesomeFont.parts.verticalLine(1);}),new Char("J",10,function(b){line(this.width,-awesomeFont.naturalHeightHalf,this.width,8);arc(this.width / 2,8,this.width,10,0,180);}),new Char("K",12,function(b){awesomeFont.parts.verticalLine();line(0,3,this.width,-awesomeFont.naturalHeightHalf);line(4,0,this.width,awesomeFont.naturalHeightHalf);}),new Char("L",12,function(b){awesomeFont.parts.verticalLine();awesomeFont.parts.bottomLine(this.width);}),new Char("M",14,function(b){awesomeFont.parts.verticalLine();line(0,-awesomeFont.naturalHeightHalf,this.width / 2,5);line(this.width,-awesomeFont.naturalHeightHalf,this.width / 2,5);awesomeFont.parts.verticalLine(this.width);}),new Char("N",12,function(b){awesomeFont.parts.leftLine();line(0,-awesomeFont.naturalHeightHalf,12,awesomeFont.naturalHeightHalf);awesomeFont.parts.verticalLine(12);}),new Char("O",16,function(b){awesomeFont.parts.bigO(this.width);}),new Char("P",12,function(b){awesomeFont.parts.leftLine();arc(0,-4.5,25,16,-90,90);}),new Char("Q",16,function(b){awesomeFont.parts.bigO(this.width);line(10,12,15,15);}),new Char("R",12,function(b){awesomeFont.parts.verticalLine();arc(0,-4.5,25,16,-90,90);line(6,3.5,12,13);}),new Char("S",13,function(b){arc(this.width / 2,-6.5,13,13,90,340);arc(this.width / 2,6.5,14,13,-90,160);}),new Char("T",14,function(b){awesomeFont.parts.topLine(this.width);awesomeFont.parts.verticalLine(7);}),new Char("U",14,function(b){arc(7,3,14,20,0,180);line(0,-awesomeFont.naturalHeightHalf,0,3);line(14,-awesomeFont.naturalHeightHalf,14,3);}),new Char("V",16,function(b){line(0,-awesomeFont.naturalHeightHalf,this.width / 2,awesomeFont.naturalHeightHalf);line(this.width,-awesomeFont.naturalHeightHalf,this.width / 2,awesomeFont.naturalHeightHalf);}),new Char("W",16,function(b){line(0,-awesomeFont.naturalHeightHalf,3,awesomeFont.naturalHeightHalf);line(3,awesomeFont.naturalHeightHalf,this.width / 2,-5);line(this.width-3,awesomeFont.naturalHeightHalf,this.width / 2,-5);line(this.width-3,awesomeFont.naturalHeightHalf,this.width,-awesomeFont.naturalHeightHalf);}),new Char("X",12,function(b){line(0,-awesomeFont.naturalHeightHalf,12,awesomeFont.naturalHeightHalf);line(0,awesomeFont.naturalHeightHalf,12,-awesomeFont.naturalHeightHalf);}),new Char("Y",16,function(b){line(0,-awesomeFont.naturalHeightHalf,this.width / 2,2);line(this.width,-awesomeFont.naturalHeightHalf,this.width / 2,2);line(this.width / 2,awesomeFont.naturalHeightHalf,this.width / 2,2);}),new Char("Z",14,function(b){awesomeFont.parts.topLine(this.width);line(0,awesomeFont.naturalHeightHalf,this.width,-awesomeFont.naturalHeightHalf);awesomeFont.parts.bottomLine(this.width);})]);var myTextFont=function(f){if(typeof f==="string"){textFont(createFont(f,0),0);currentMyText.font=undefined;}else{currentMyText.font=f;}};var myTextFill=function(r,g,b,a){fill(r,g,b,a);currentMyText.fill=color(r,g,b,a);};var myTextSize=function(tS){textSize(tS);currentMyText.size=tS;};var myTextWeight=function(weight){currentMyText.weight=weight;};var myTextAlign=function(align,yAlign){textAlign(align,yAlign);currentMyText.xAlign=align;currentMyText.yAlign=yAlign;};var myTextTrailSpace=function(trailSpace){currentMyText.trailSpace=trailSpace;};var myTextLeading=function(leading){textLeading(leading);currentMyText.leading=leading;};var myText=function(t,x,y,width,height){if(currentMyText.font){var onLine=0;pushStyle();pushMatrix();translate(x,y);scale(currentMyText.size / 30);var paragraphWidth=0;for(var c=0;c<t.length;c++){var characterString=t[c];if(characterString==="\n"){break;}
var character=currentMyText.font.characterInfo[0];for(var cI=0;cI<currentMyText.font.characterInfo.length;cI++){var currentCharacter=currentMyText.font.characterInfo[cI];if(currentCharacter.id===characterString){character=currentCharacter;break;}}
paragraphWidth+=character.width+currentMyText.trailSpace+currentMyText.weight;}
switch(currentMyText.xAlign){case CENTER:translate(-paragraphWidth / 2,0);break;case RIGHT:translate(-paragraphWidth,0);break;}
for(var c=0;c<t.length;c++){var characterString=t[c];if(characterString==="\n"){popMatrix();popStyle();myText(t.substring(c+1),x,y+currentMyText.leading);return;}
strokeWeight(1);noFill();stroke(currentMyText.fill);strokeWeight(currentMyText.weight);strokeCap(ROUND);var character=currentMyText.font.characterInfo[0];for(var cI=0;cI<currentMyText.font.characterInfo.length;cI++){var currentCharacter=currentMyText.font.characterInfo[cI];if(currentCharacter.id===characterString){character=currentCharacter;break;}}
character.draw(currentMyText.weight);translate(character.width+currentMyText.trailSpace+currentMyText.weight,0);}
popMatrix();popStyle();}else{text(t,x,y);}};

/* -------------------------------- KCF.JS Start - Minified Version ------------------------------- */
var poly=function(array){beginShape();for(var i=0;i<array.length;i++){vertex(array[i][0],array[i][1]);}
endShape();};var rectGradient=function(x,y,width,height,from,to){for(var i=0;i<width;i++){stroke(lerpColor(from,to,i / width));line(x+i,y,x+i,y+height);}};var ellipseGradient=function(x,y,width,height,from,to,type,endGrad){if(type==="falloff"){ellipseMode(CENTER);noStroke();var gradientBars=endGrad-width;for(var i=0;i<gradientBars;i++){var sectionWidth=(gradientBars-i)+width;fill(lerpColor(from,to,i / gradientBars));ellipse(x,y,sectionWidth+width,sectionWidth+height);}}else if(type==="linear"){for(var i=0;i<1;i+=0.001){var sx=lerp(x,x+width*2,i);var c=lerpColor(from,to,i);stroke(c);line(sx,y+height*sqrt(1-sq(2*i-1)),sx,y-height*sqrt(1-sq(2*i-1)));}}};var font=function(font,size,api,fill,align){if(api===undefined){textFont(createFont(font),size);}else if(api === "dyapi"){myTextFont(font);myTextSize(size);myTextAlign(align);myTextFill(fill);}};

/* ---------- CHARACTERS --------- */
var jimmy = function(x, y, charSize) {
    fill(0, 0, 0);
    rect(x, y, charSize, charSize);
    fill(255, 255, 255);
    // Blinking
    if(frameCount % 200 > 8) {
        ellipse(x + charSize * 1/4, y + charSize * 1/4, charSize * 1/5, charSize * 1/5);
        ellipse(x + charSize * 3/4, y + charSize * 1/4, charSize * 1/5, charSize * 1/5);
    }
};

/* ---------- SLIDES ---------- */
var menuSlide = function() {
    if(fadeInOut) {
        fade+=5;
    }
    if(fade >= 255) {
        fade = 255;
        fadeInOut = false;
        slideNumber = 1;
    }
    
    font(awesomeFont, 60, "dyapi", color(255, 255, 255), LEFT);
    myTextWeight(3);
    myText("A NEW DAWN", 40, 50);
    myTextSize(28);
    myTextWeight(4);
    myText("THE STORY OF YESTERDAY", 15, 110 + sin(frameCount * 5) * 3);
    
    ellipseGradient(200, 260, 80, 80, color(0, 0, 0), color(255, 255, 255), "falloff", 120);
    jimmy(175, 235, 50);
    
    if(mouseX > 0 && mouseX < 100 && mouseY > 180 && mouseY < 220) {
        fill(102, 102, 102);
    } else {
        fill(255, 255, 255);
    }
    rect(-10, 180, 110, 40, 10);
    myTextFill(0, 0, 0);
    myTextSize(25);
    myText("PLAY", 20, 200);
    
    if(mouseX > 0 && mouseX < 100 && mouseY > 300 && mouseY < 340) {
        fill(102, 102, 102);
    } else {
        fill(255, 255, 255);
    }
    rect(-10, 300, 110, 40, 10);
    myTextFill(0, 0, 0);
    myTextSize(20);
    myText("OPTIONS", 10, 320);
    
    fill(0, 0, 0, fade);
    rect(0, 0, 400, 400);
};
var intro = function() {
    
};
var level02 = function() {
    if(!fadeInOut) {
        fade-=5;
    }
    background(255, 255, 255);
    
    fill(0, 0, 0);
    rect(0, 250, 400, 150);
    jimmy(190, 220, 30);
    
    textFill = "Welcome to the story of a lonely character.\n                 His name is Jimmy...";
    if(textScroller.length !== textFill.length && frameCount % 3 === 0 && fade < 0) {
        textScroller += textFill[textEff];
    }
    if(textScroller.length !== textFill.length) {
        fill(0, 0, 0, 255);
    } else if(waitDelay === 0 && textFade !== 0) {
        fill(0, 0, 0, textFade-=5);
    } else if(textFade !== 0) {
        fill(0, 0, 0, 255);
        waitDelay--;
    } else {
        textFill = "";
    }
    text(textScroller, 15, 20);
    
    fill(0, 0, 0, fade);
    rect(0, 0, 400, 400);
    
    if(textEff !== textFill.length && frameCount % 3 === 0 && fade < 0) {
        textEff++;
    }
};

/* --------- RENDERING --------- */
mouseMoved = function() {
    switch(slideNumber === 0) {
        case mouseX > 0 && mouseX < 100 && mouseY > 180 && mouseY < 220:
            cursor(HAND);
            break;
        case mouseX > 0 && mouseX < 100 && mouseY > 300 && mouseY < 340:
            cursor(HAND);
            break;
        default:
            cursor(ARROW);
            break;
    }
    if(slideNumber === 1) {
        cursor(ARROW);
    }
};
mouseClicked = function() {
    switch(slideNumber === 0) {
        case mouseX > 0 && mouseX < 100 && mouseY > 180 && mouseY < 220:
            fadeInOut = true;
            break;
    }
};
draw = function() {
    background(0, 0, 0);
    switch(slideNumber) {
        case 0:
            menuSlide();
            break;
        case 1:
            intro();
            break;
        case 2:
            level01();
            break;
    }
};