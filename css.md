<h1 align=center>----- Fundamentals -----</h1>

## The ```position``` Property
The ```position``` property specifies the positioning method used for an element (e.g. static, relative, fixed, absolute, sticky). Only once a ```position``` element is chosen, can you position elements using top, bottom, left, right. 

* ```position: static;```
  * default position for elements; no special positioning.
  * not affected by the top, bottom, left, right properties.
* ```position: relative;```
  * element is positioned relative to its normal position.
  * top, bottom, left, right will adjust the element away from its normal position.
* ```position: fixed;```
  * element is positioned relative to the viewport, meaning it will stay in the same place even if the page is scrolled.
  * a fixed element does not leave a gap in the page where there would normally be one.
  * top, bottom, left, right work as expected. 
* ```position: absolute;```
  * element is positioned relative to its nearest positioned ancestor (parent element must have a ```position``` set for it to work, but not ```static```).
  * if there is no parent element, it will use the document body.
* ```position: sticky;```
  * positioned based on the user's scroll position.
  * will stay in the viewport when scrolling and it hits limit.

## The
