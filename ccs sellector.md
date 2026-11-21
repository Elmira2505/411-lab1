Here:
- querySelectorAll() gets all cards.
- [...elements] converts the NodeList into an array.
- filter() checks additional JavaScript conditions.
- dataset.status accesses the data-status attribute.

Quick reference
Selector	Meaning
.card.active	Has both classes
#header .nav-link	Element inside an ID
input[type="email"]	Input with email type
.card[data-id="10"]	Class and attribute
input:checked	Checked input
.card:not(.active)	Card without active class
.container > .card	Direct child card
.card, .button	Card OR button

Important: No space between selectors means the same element must match all conditions. A space means a descendant relationship.