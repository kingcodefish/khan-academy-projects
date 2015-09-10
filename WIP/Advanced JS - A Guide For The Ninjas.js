/****************************************************************
 *                                                              *
 *                                                              *
 *            Advanced JS: A Guide For The Ninjas               *
 *                          By: KCF                             *
 *                                                              *
 *                                                              *
 ****************************************************************/
/**
 * 
 * Finished the JS courses on Khan Academy? Looking to see what to do next?
 * This is a guide for those that want to learn more and try to master the language.
 * Though this won't cover everything, it will try to give you a good grasp of most of the language.
 * Some of the stuff mentioned will be added in ECMAScript 6, so it may not work in some older browsers.
 * 
 * To navigate, click through the slides or go to the chapters via the chapter page.
 * 
**/

var slideNumber = 0;

var home = function() {
    background(79, 214, 137);
    fill(0, 0, 0);
    textSize(50);
    text("Advanced JS:", 50, 70);
};

var draw = function() {
    switch(slideNumber) {
        case 0:
            home();
            break;
    }
};