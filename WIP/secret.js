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

mouseClicked = function() {
    println(mouseX + ", " + mouseY);
};

draw = function() {
    background(59, 115, 172);
    strokeJoin(ROUND);
    /** Chewie's Head **/
    beginShape();
        fill(161, 112, 80);
        vertex(82, 19);
        bezierVertex(72, 14, 58, 16, 56, 19);
        bezierVertex(64, 17, 69, 19, 73, 20);
        bezierVertex(66, 22, 60, 33, 60, 31);
        bezierVertex(62, 37, 62, 28, 72, 24);
        bezierVertex(70, 30, 61, 33, 56, 48);
        vertex(66, 39);
        bezierVertex(62, 46, 65, 39, 59, 57);
        vertex(62, 65);
        vertex(64, 65);
        vertex(62, 95);
        vertex(71, 102);
        vertex(67, 92);
        vertex(75, 97);
        vertex(78, 95);
        vertex(80, 97);
        vertex(108, 90);
        bezierVertex(95, 57, 106, 49, 132, 61);
        vertex(140, 47);
    endShape();
};
