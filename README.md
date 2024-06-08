PhotoGallery/
│
├── index.html
├── style.css
└── Images/
    ├── fox.jpeg
    ├── whale.jpeg
    ├── Monkey.jpeg
    └── Antilope.jpeg
    HTML
The HTML file provides the structure for the photo gallery, including:

Links to external CSS files for FontAwesome icons and Google Fonts.
A main container (.card-holder) that holds all the cards.
Each card has a background image, title, location, and a "Know more" link with an arrow icon.
CSS
The CSS file includes styles for:

The body to reset margin and padding.
The card holder to arrange the cards in a row with flexbox.
Individual cards with background images, hover effects, and overlay gradients.
Text and link styling within each card.
Media query for responsive design to hide text on small screens.

Key CSS Classes and Selectors
.card-holder: Arranges the cards in a row and sets the background color and height.
.card: Defines the size, positioning, and flex properties for the cards.
.card-1, .card-2, .card-3, .card-4: Specific styles for each card's background image and hover effects.
.text: Styles the text inside the cards, with transitions for hover effects.
.card a: Styles the "Know more" link and transitions for hover effects.
@media (max-width:425px): Hides the text on small screens for better responsiveness.


Java Script Task run using : Code Runner

