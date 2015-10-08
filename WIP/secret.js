/****************************************************************
 *                                                              *
 *                                                              *
 *                  Star Wars/C&H Crossover                     *
 *                          By: KCF                             *
 *                                                              *
 *                                                              *
 ****************************************************************/

/**
 * 
 * So I saw this photo on the internet the other day, and I was so happy to see it.
 * I just had to make it.
 * 
 * And so I present the crossover of Star Wars and Calvin & Hobbes!
 * 
 */
/** Dev picture reference: https://www.google.com/search?espv=2&biw=1920&bih=955&tbm=isch&sa=1&q=cartoon+chewbacca&oq=cartoon+chewbacca&gs_l=img.3..0l2j0i5i30j0i8i30l3.73565.78068.0.78176.26.22.0.0.0.0.86.1248.21.21.0....0...1.1.64.img..8.18.1089.7Xq6urmdO2k#imgrc=Rz_ZA5xfzPjPmM%3A **/

var _help = function() {
};

mouseClicked = function() {
    println(mouseX + ", " + mouseY);
};

draw = function() {
    background(59, 115, 172);
    strokeJoin(ROUND);
    /** Chewie's Hair **/
    beginShape();
        fill(161, 112, 80);
        vertex(82, 15);
        bezierVertex(72, 14, 58, 16, 56, 19);
        bezierVertex(64, 17, 69, 19, 73, 20);
        bezierVertex(66, 22, 60, 33, 60, 31);
        bezierVertex(62, 37, 62, 28, 72, 24);
        bezierVertex(70, 30, 61, 33, 56, 48);
        vertex(66, 39);
        bezierVertex(62, 46, 65, 38, 59, 57);
        vertex(62, 53);
        vertex(64, 55);
        vertex(61, 95);
        vertex(71, 102);
        vertex(67, 92);
        vertex(75, 97);
        vertex(78, 95);
        vertex(80, 97);
        vertex(108, 90);
        bezierVertex(95, 57, 106, 49, 132, 61);
        vertex(140, 47);
        bezierVertex(144, 42, 136, 28, 130, 25);
        vertex(111, 11);
        vertex(119, 21);
        bezierVertex(110, 16, 92, 14, 82, 15);
    endShape();
    /** Chewie's Face & Middle Torso Above Belt **/
    beginShape();
        fill(194, 151, 119);
        vertex(141, 45);
        vertex(141, 63);
        vertex(149, 84);
        vertex(153, 79);
        vertex(154, 81);
        vertex(150, 85);
        vertex(153, 85);
        vertex(150, 87);
        bezierVertex(151, 90, 149, 113, 136, 127);
        bezierVertex(133, 130, 150, 130, 155, 126);
        bezierVertex(141, 134, 149, 130, 138, 133);
        bezierVertex(141, 134, 147, 133, 155, 142);
        bezierVertex(143, 139, 148, 140, 141, 141);
        bezierVertex(150, 149, 146, 145, 152, 153);
        bezierVertex(150, 153, 146, 148, 144, 151);
        bezierVertex(139, 174, 145, 170, 125, 199);
        vertex(114, 162);
        vertex(118, 166);
        vertex(109, 140);
        vertex(114, 148);
        bezierVertex(110, 138, 110, 137, 103, 132);
        vertex(111, 136);
        bezierVertex(101, 118, 88, 111, 80, 120);
    endShape();
};
