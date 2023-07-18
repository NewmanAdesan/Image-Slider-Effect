A Web Effect Project that shows an approach to design an image slider, a Frame UI that changes an image by a button click.

three key concept
1. background image manipulation
to place the same image in two containers a smaller container & a bigger container in exactly the same position. this is done using the background-image, background-position & background-size property.

2. sliding effect design
all the images in the slides is actually on the page but only one is made visible (transparent) - made active at a time
to cause an image to be active will mean to make that image visible (opaque).
one key thing that makes the effect come alive is the transition that states, when the opacity changes, smoothly perform the changes over 0.5seconds.

3. dropping the constrat of the background with a before element that is absolutely positioned.