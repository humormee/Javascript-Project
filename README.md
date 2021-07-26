## Background

Image Destruct is a tool for animating pictures. The app gives life to images. Users can choose from a variety of effects for creating strange but interesting iterations of the same image.

## Functionality & MVPs

Users of the app will have the ability to:

* play a classic slider puzzle game
    * images are divided into many "cards" that compromise of the entire image
    * cards are randomly shuffled in n * m rectangle to be rearranged by the user
* compare their moves to an algorithm for finding the least number of moves
* interact with visualizations of image
* can choose different color schemes of the picture

### Bonus:
* can play the sliding puzzle game with the edited version of the picture

## Technologies, Libraries, APIs

This app uses the following technologies
    * Webpack and Babel to for organizing and transpiling code
    * npm for managing dependencies
    * Canvas API for rendering picture and animations
    
 Implementation Timeline
 
 Monday:
 * get project files and initialization setup, configure webpack
 * get more familiar with the Canvas API
 * if time allows, render sample pictures onto canvas

Tuesday:
* render sample pictures onto canvas if not already rendering
* divide the image into cards with the ability to slide the cards
* if time allows, start implementation of algorithm that finds the optimal path (with A^*)
https://www.cs.princeton.edu/courses/archive/spring20/cos226/assignments/8puzzle/specification.php

Wednesday:
* finish implementation of algorithm
* if time allows, begin implementing visual animations

Thurday:
* complete visual animations
* if time allows, work on css

Friday Morning:
* finish up anything remaining / css
* deploy to github pages
* finish readme
