# TECHNIC MANUAL OF POKEMONWEB
## INDEX
<ul>
    <li>1.INDEX</li>
    <li>1.1 HTML INDEX</li>
    <li>1.2 CSS INDEX</li>
    <li>1.3 JS INDEX</li>
    <li>2.ABOUT-US</li>
    <li>2.1 HTML ABOUT-US</li>
    <li>2.2 CSS ABOUT-US</li>
    <li>3.SEARCH</li>
    <li>3.1 HTML SEARCH</li>
    <li>3.2 CSS SEARCH</li>
    <li>4.DATABASE</li>
    <li>5.API</li>
    <li>6. BUILT WITH</li>
    <li>7.INSTALL</li>
    <li>8.USAGE</li>
    <li>9.POKEFILES</li>

</ul>

## 1.INDEX
### 1.1 HTML INDEX
The home page, which explains the purpose of the whole website.
### 1.2 CSS INDEX
This file gives the specific style unique for the home page.
### 1.3 JS INDEX
Contains the main logic of the search functionality. It allows to fetch the info from the PokeApi, and guide the user when something goes wrong (No results found, no input provided...).
## 2.ABOUT-US
### 2.1 HTML ABOUT-US
For the About-Us HTML, we have linked the html with the Poké Ball svg, and with the css of the index header, the About-us, the reset and with the general CSS. Later, within the header we have inserted the Pokémon logo so that it appears on the left.
Also to insert the links for Home, About Us and the search engine we have implemented an unordered list with the three items.
### 2.2 CSS ABOUT-US
In the About-us CSS we have implemented a main with a text-align: center to center the title and the text, for the text we have implemented a margin-left and a margin-right, at 230 px each to compress the text in the center and a " color: var(--color-secondary); " to change the color of the text.
In the image we have implemented a width of 500 px and we have also implemented a margin-left at 450 px and a margin-right at 250 px to reduce its size to a normal size.
## 3.SEARCH
### 3.1 HTML SEARCH
In this file the user can enter an input to send it to the PokeApi, which will return the matching results.
### 3.2 CSS SEARCH
This file gives the specific style unique for the search page.
## 4.DATABASE
In the database there is all the API data, with the Pokémon data that the user then fetches when using the website.
## 5.API
We have used the API "https://pokeapi.co/api/v2/" which has 1302 entries, which is invoked with a fetch and a return, through several constants
## 6.BUILT WITH
Uses PokeAPI,HTML,JavaScript,CSS and a lot of SVG's to built the Pokemon website.
## 7.INSTALL
Install this project with:

This project doesn't need to be installed
## 8.USAGE
Read stats about different Pokemon.
## 9.POKEFILES
The Pokefiles used is: https://pokeapi.co/api/v2/