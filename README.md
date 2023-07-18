<p align="center">
  <img src="./ReadMe-Images/Web-Effect-Project-banner3.png">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/HTML-E34F26.svg" alt="HTML badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/CSS-1572B6.svg" alt="CSS badge" style="height: 25px;"> 
  <img src="https://img.shields.io/badge/JS-F7DF1E.svg" alt="JS badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/Image Navigation-3F51B5.svg" alt="Web Effect badge" style="height: 25px;">
</p>



# Project Name: Image-Slider-Effect
A Web Effect Project that shows an approach to design an image slider, a Frame UI that changes an image by a button click.
Three KEY Concepts:
1. background image manipulation
to place the same image in two containers a smaller container & a bigger container in exactly the same position. this is done using the background-image, background-position & background-size property.

2. sliding effect design
all the images in the slides is actually on the page but only one is made visible (transparent) - made active at a time
to cause an image to be active will mean to make that image visible (opaque).
one key thing that makes the effect come alive is the transition that states, when the opacity changes, smoothly perform the changes over 0.5seconds.

3. dropping the constrat of the background with a before element that is absolutely positioned.

<br /><br />

# Project Concept: Image Navigation Logic
There is a variable called "activeImage" in the back end that keeps track of the active image, i.e., the currently displayed image.

When the left arrow button is clicked, The "activeImage" identifier decreases by 1, but it never goes below 0. This changes the displayed image to the previous one.

When the right arrow button is clicked, The "activeImage" identifier increases by 1, but it never goes beyond 4. This changes the displayed image to the next one.

To set a specific image as active: We remove the "active" class from any element with the class "image" that currently has it.
Then we add the "active" class to the selected image we want to make active. The selection is based on the "activeImage" identifier.

<br /><br />

# Project Concept: Image Gallery Navigation Effect
When the image is changed, and either the left arrow button or right arrow button is clicked, both the image in the frame and the image in the background undergo the same transition. However, they appear to transition slightly differently. Even though they have the same transition-duration, it may seem like there is a bit of delay between the two, but in reality, there is no delay.

This difference in perception occurs because the frame only displays the center of the image, while the body shows the full image. When the image is drawn to the container, it starts from the center and then gradually extends to the edges. This process makes it seem like there is a delay, especially when the transition-duration is set to a slower value like 0.4 seconds.

In fact, the delay has always been present due to this difference in how the images are displayed and transitioned. The transition-duration value merely accentuates the perceived delay, but it does not introduce any additional delay beyond what is inherently there in the image display and transition process.
