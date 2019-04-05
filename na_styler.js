"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Dylan Kelley
   Date:   4.3.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

/// Event listener to run the setStyles function when the window loads.
window.addEventListener("load", setStyles);

// Func: Sets up the style sheets and the style sheet switcher.
function setStyles() {
      // Var: Variable to store the value of the randInt() function with a parameter of 5.
      var styleNum = randInt(5);

      // Var: Creates a new link element node.
      var newStyle = document.createElement("link");

      /// Sets the "rel" attribute to "stylesheet".
      newStyle.setAttribute("rel", "stylesheet");

      /// Sets the "id" attribute to "fancySheet".
      newStyle.setAttribute("id", "fancySheet");

      /// Sets the "href" attribute to the one of the five stylesheets based on the value of styleNum.
      newStyle.setAttribute("href", "na_style_" + styleNum + ".css");

      /// Appends the newStyle node to the document head.
      document.head.appendChild(newStyle);

      // Var: Creates a new figure element node.
      var figBox = document.createElement("figure");

      /// Sets the "id" attribute to "styleThumbs".
      figBox.setAttribute("id", "styleThumbs");

      /// Appends the node to div element with the ID of "box".
      document.getElementById("box").appendChild(figBox);

      // For: Populates the figure box with preview images of the five fancy style sheets.
      for (var i = 0; i < 5; i++) {
            // Var: Creates a new image element node.
            var sheetImg = document.createElement("img");

            /// Sets the "src" attribute to "na_small_i.png", where i is the value of the index in the loop.
            sheetImg.setAttribute("src", "na_small_" + i + ".png");

            /// Sets the "alt" attribute to "na_style_i.css", where i is the value of the index in the loop.
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            /// Event handler that runs an anonymous function that changes the href attribute of the link element with the ID of "fancySheet" to the value of the "alt" attribute of the event target.
            sheetImg.onclick = function (e) {
                  document.getElementById("fancySheet").href = e.target.alt;
            };

            /// Appends the sheetImg element node to the figBox element node.
            figBox.appendChild(sheetImg);
      }

      /// Creates an embedded style sheet named thumbStyles.
      var thumbStyles = document.createElement("style");

      /// Appends the style sheet to the document head.
      document.head.appendChild(thumbStyles);

      /// Adds the following style rules to the thumbStyles style sheet.
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
         position: absolute; \
         left: 0px; \
         bottom: 0px; \
      }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
         outline: 1px solid black; \
         cursor: pointer; \
         opacity: 0.75; \
      }", 1);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
         outline: 1px solid red; \
         opacity: 1.0; \
      }", 2);
}


// Func: Returns a random integer from 0 up to size - 1.
function randInt(size) {
      return Math.floor(size * Math.random());
}