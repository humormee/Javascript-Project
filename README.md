## Background

Image Shift is a sliding puzzle game. Sample images are broken up into the specified number of cards, and randomly shuffled. Players try to complete the puzzle in the least number of moves. Players have the ability to add filters to the image they are playing on.


## Functionality & MVPs

Users of the app will have the ability to:

* play a classic slider puzzle game
    * images are divided into many "cards" that compromise of the entire image
    * cards are randomly shuffled in an m * m rectangle to be rearranged by the user
* compare their moves to an algorithm for finding the least number of moves
* animate moves of the algorithm
* choose different color schemes of the picture

### Bonus:
* play the sliding puzzle game with the edited version of the picture

In addition, this project will include:
* An **About** modal that describes any background of the app as well as how to get started
* A production README

## Wireframes
![Screen Shot 2021-07-25 at 9 31 28 PM (2)](https://user-images.githubusercontent.com/42757012/126925309-2bbabbda-89a9-4b0f-84fa-3fd234b6d688.png)

## Technologies, Libraries, APIs

This app uses the following technologies
    * Webpack and Babel to for organizing and transpiling code
    * npm for managing dependencies
    * Canvas API for rendering picture and animations
    
 ## Implementation Timeline
 
 ### Monday
 * get project files and initialization setup, configure webpack
 * get more familiar with the Canvas API
 * if time allows, render sample pictures onto canvas

### Tuesday
* render sample pictures onto canvas if not already rendering
* divide the image into cards with the ability to slide and switch with eachother


### Wednesday
* finish the functionality of card shuffling
* start implementation of algorithm that finds the optimal path (with A^*)
https://www.cs.princeton.edu/courses/archive/spring20/cos226/assignments/8puzzle/specification.php

### Thurday
* finish implementation of algorithm
* start functionality of selecting different color schemes
* if time allows, work on css

### Friday
* polish all existing functionality
* work on css
* deploy to github pages
* work on README

