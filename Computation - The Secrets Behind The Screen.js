/****************************************************************
 *                                                              *
 *                                                              *
 *         Computation: The Secrets Behind The Screen           *
 *                          By: KCF                             *
 *                                                              *
 *                                                              *
 ****************************************************************/
/**
 * 
 * Ever wondered about the inner workings of your computer aside from the code you write?
 * This program is here to act as a course to take you through what the architecture of a computer looks like and the history behind it.
 * By the end of this "course", you'll be able to identify many of the computer's inner parts and know how they relate to what you know and love.
 * Let's get started! :D
 * 
**/

var slideNumber = 0;
var mouseOverButton = "";
var binaryString = "01010011100101";
var binaryPick = round(random(1, 10));
var binaryPick2 = round(random(1, 10));
var binaryPick3 = round(random(1, 10));
var binaryPick4 = round(random(1, 10));
var binaryPick5 = round(random(1, 10));


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

var button = function(x, y, wid, hei, radius, text, fi, hoverFi, stro, stroWei, hoverStro, hoverStroWei) {
    rectMode(CENTER);
    if(abs(x - mouseX) <= wid / 2 && abs(y - mouseY) <= hei / 2) {
        fill(hoverFi);
        stroke(hoverStro);
        strokeWeight(hoverStroWei);
        if(mouseIsPressed) {
            mouseOverButton = text;
        } else {
            mouseOverButton = "";
        }
    } else {
        fill(fi);
        stroke(stro);
        strokeWeight(stroWei);
        mouseOverButton = "";
    }
    rect(x, y, wid, hei, radius);
};

var home = function() {
    if(frameCount % 5 === 0) {
        binaryString = round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString() + round(random(0, 1)).toString();
        binaryPick = round(random(1, 10));
        binaryPick2 = round(random(1, 10));
        binaryPick3 = round(random(1, 10));
        binaryPick4 = round(random(1, 10));
        binaryPick5 = round(random(1, 10));
    }
    rectGradient(0, 0, 400, 400, color(0, 0, 0), color(29, 120, 56));
    fill(26, 25, 107, 30);
    textSize(50);
    switch(binaryPick) {
        case 1:
            text(binaryString, 200, 40);
            break;
        case 2:
            text(binaryString, 200, 80);
            break;
        case 3:
            text(binaryString, 200, 120);
            break;
        case 4:
            text(binaryString, 200, 160);
            break;
        case 5:
            text(binaryString, 200, 200);
            break;
        case 6:
            text(binaryString, 200, 240);
            break;
        case 7:
            text(binaryString, 200, 280);
            break;
        case 8:
            text(binaryString, 200, 320);
            break;
        case 9:
            text(binaryString, 200, 360);
            break;
        case 10:
            text(binaryString, 200, 400);
            break;
    }
    switch(binaryPick2) {
        case 1:
            text(binaryString, 200, 40);
            break;
        case 2:
            text(binaryString, 200, 80);
            break;
        case 3:
            text(binaryString, 200, 120);
            break;
        case 4:
            text(binaryString, 200, 160);
            break;
        case 5:
            text(binaryString, 200, 200);
            break;
        case 6:
            text(binaryString, 200, 240);
            break;
        case 7:
            text(binaryString, 200, 280);
            break;
        case 8:
            text(binaryString, 200, 320);
            break;
        case 9:
            text(binaryString, 200, 360);
            break;
        case 10:
            text(binaryString, 200, 400);
            break;
    }
    switch(binaryPick3) {
        case 1:
            text(binaryString, 200, 40);
            break;
        case 2:
            text(binaryString, 200, 80);
            break;
        case 3:
            text(binaryString, 200, 120);
            break;
        case 4:
            text(binaryString, 200, 160);
            break;
        case 5:
            text(binaryString, 200, 200);
            break;
        case 6:
            text(binaryString, 200, 240);
            break;
        case 7:
            text(binaryString, 200, 280);
            break;
        case 8:
            text(binaryString, 200, 320);
            break;
        case 9:
            text(binaryString, 200, 360);
            break;
        case 10:
            text(binaryString, 200, 400);
            break;
    }
    switch(binaryPick4) {
        case 1:
            text(binaryString, 200, 40);
            break;
        case 2:
            text(binaryString, 200, 80);
            break;
        case 3:
            text(binaryString, 200, 120);
            break;
        case 4:
            text(binaryString, 200, 160);
            break;
        case 5:
            text(binaryString, 200, 200);
            break;
        case 6:
            text(binaryString, 200, 240);
            break;
        case 7:
            text(binaryString, 200, 280);
            break;
        case 8:
            text(binaryString, 200, 320);
            break;
        case 9:
            text(binaryString, 200, 360);
            break;
        case 10:
            text(binaryString, 200, 400);
            break;
    }
    switch(binaryPick5) {
        case 1:
            text(binaryString, 200, 40);
            break;
        case 2:
            text(binaryString, 200, 80);
            break;
        case 3:
            text(binaryString, 200, 120);
            break;
        case 4:
            text(binaryString, 200, 160);
            break;
        case 5:
            text(binaryString, 200, 200);
            break;
        case 6:
            text(binaryString, 200, 240);
            break;
        case 7:
            text(binaryString, 200, 280);
            break;
        case 8:
            text(binaryString, 200, 320);
            break;
        case 9:
            text(binaryString, 200, 360);
            break;
        case 10:
            text(binaryString, 200, 400);
            break;
    }
    font(awesomeFont, 50, "dyapi", color(255, 255, 255), CENTER);
    myText("COMPUTATION", 200, 70);
    font(awesomeFont, 25, "dyapi", color(255, 255, 255), CENTER);
    myText("THE SECRETS BEHIND THE SCREEN", 200, 120 + sin(frameCount * 5) * 3);
    
    noFill();
    stroke(59, 24, 24);
    strokeWeight(2);
    poly([[10, 400], [10, 200], [30, 200], [30, 380], [50, 380], [50, 150], [20, 150], [20, 160], [40, 160], [40, 180], [10, 180], [10, 140], [70, 140], [70, 280], [100, 280], [100, 160], [130, 160], [130, 360], [160, 360], [160, 390], [110, 390], [110, 300], [70, 300], [70, 400]]);
    
    // Buttons
    button(200, 200, 100, 50, 15, "Start", color(56, 56, 222), color(21, 21, 69), color(255, 255, 255), 5, color(0, 0, 0), 2);
    button(200, 300, 100, 50, 15, "End", color(56, 56, 222), color(21, 21, 69), color(255, 255, 255), 5, color(0, 0, 0), 2);
};

mousePressed = function() {
    if(slideNumber === 0) {
        switch(true) {
            case mouseOverButton === "Start":
                println("Start");
                break;
        }
    }
};
draw = function() {
    switch(slideNumber) {
        case 0:
            home();
            break;
    }
};