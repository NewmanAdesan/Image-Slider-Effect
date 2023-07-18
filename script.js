

const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");
const images = document.querySelectorAll(".image");
let activeImage = 0;


leftButton.addEventListener('click', () => {

    // change the active image identifier (increase)
    activeImage -= 1;

    // if new active image identifier is invalid
    if (activeImage < 0 || activeImage > 4) activeImage = 4;

    // use the active image identifier to change the image that is active
    images.forEach(image => image.classList.remove("active"));
    images[activeImage].classList.add("active");

    // change the body backgroud image to the active image
    document.body.style.backgroundImage = images[activeImage].style.backgroundImage;
})



rightButton.addEventListener('click', () => {

    // change the active image identifier (increase)
    activeImage += 1;

    // if new active image identifier is invalid
    if (activeImage > 4) activeImage = 0;

    // use the active image identifier to change the image that is active
    images.forEach(image => image.classList.remove("active"));
    images[activeImage].classList.add("active");

    // change the body backgroud image to the active image
    document.body.style.backgroundImage = images[activeImage].style.backgroundImage;
})


/* Project Info Close Button */
document.getElementById("project-close").addEventListener("click", () => {
    document.getElementById("project-info").style.display = "none";
})


/*
 *
 * FOR IMAGE SLIDER EFFECT
 * image in frame and also kind of dim out in the background
 * image change effect
 * image change logic
 * 
 */


/*
 *  IMAGE GALLERY NAVIGATION LOGIC
 *
 * all images has an identifier from 0-4.
 * a certain identifier called "activeImage" sits at the back-end
 * that keeps track of the image that is active i.e the image that is displayed.
 * 
 * when the left arrow button is clicked, this identifier decreases by 1 never exceeding 0 thus changing the image that is displayed i.e the image that is active.
 * when the right arrow button is clicked, this identifier increases by 1 never exceeding 4 thus changing the image that is displayed i.e the image that is active.
 * 
 * to make a certain image active, 
 * we remove the active class from any element with tha class "image" that has it,
 * then we add the active class to the selected image we want to make active.
this image is selected based on the "activeImage" identifier




IMAGE GALLERY NAVIGATION EFFECT

When the image is changed, and either the left arrow button or right arrow button is clicked, both the image in the frame and the image in the background undergo the same transition. However, they appear to transition slightly differently. Even though they have the same transition-duration, it may seem like there is a bit of delay between the two, but in reality, there is no delay.

This difference in perception occurs because the frame only displays the center of the image, while the body shows the full image. When the image is drawn to the container, it starts from the center and then gradually extends to the edges. This process makes it seem like there is a delay, especially when the transition-duration is set to a slower value like 0.4 seconds.

In fact, the delay has always been present due to this difference in how the images are displayed and transitioned. The transition-duration value merely accentuates the perceived delay, but it does not introduce any additional delay beyond what is inherently there in the image display and transition process.
 * 
 * 
 */