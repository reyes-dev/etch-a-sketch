# etch-a-sketch
I will be creating a web page that has a 16x16 grid of square divs.
I will be using CSS Grid and JavaScript.
The program should have a hover effect when the cursor goes over a div.
The program should have a button that asks for user input to decide the number of squares on each side of the grid.
This new grid should be empty and fit in the same total space, (e.g. 960px wide) just with more boxes.
The input should have a limit of 100.
# 5.04.22
The project is complete. 
It first loads a page with a default 16x16 grid of div squares created in JavaScript and inserted into a container.
The user can hover over a div, changing it's color to blue, and click to change the div square to black. 
Clicking again reverts the color to the default.
The grid dimensions can be set at the bottom by submitting a number value between 1-100 in the form and clicking submit. 
This also resets the grid, emptying the container of the old divs by deleting them first.