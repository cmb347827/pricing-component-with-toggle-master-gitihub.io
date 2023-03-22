# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

[screenshot.png](https://postimg.cc/hQs1bNJd)

### Links

- Solution URL: [Github](https://github.com/cmb347827/pricing-component-with-toggle-master-gitihub.io)
- Live Site URL: [Live Github](https://cmb347827.github.io/pricing-component-with-toggle-master-gitihub.io/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned
 accesibility, validator
- I wanted to solve this using just HTML and CSS as in the bonus suggestion. One tricky part was how to create the toggle switch. 
  I had found a site that explained it really well, so I thought and got it to work. But it was not correct accesibility compliant. It used a single checkbox for what's really a single 
  on/off option, not two separate options (annual/monthly). I asked for advice at freecodecamp forum at someone there pointed me in the right direction (the sarasoueidan link).
- When I finally got the toggle to work, and it worked with the mouse , I could not get it to work using the keyboard. I wrongly assumed I needed to use the spacebar/enter 
  keys, and spend a day stuck on that. I asked again at freecodecamp and someone said I simply needed to use the arrow keys instead. And it worked fine all along it seems.
- I also had some trouble getting it to toggle the dollar amounts when activating the toggle switch. I found a stackoverflow explaining :has , and that worked.
- It now works both with just CSS alone to toggle using the mouse and keyboard, and I've added a JS file which also , by itself, correctly toggles the switch using 
  the mouse or keyboard , and back and forth between the mouse/keyboard (though the script link is commented out in the html file, so it's not called now, as I want it to show just html/CSS solution)
- Note: the JS keyboard functionality only responds to the enter key/ spacebar, not the arrow keys.

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascrip, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

- [How to affect other elements when one element is hovered](https://stackoverflow.com/questions/4502633/how-to-affect-other-elements-when-one-element-is-hovered) - Nothing else worked. Finally found :has , and that was the answer.Never heard of it before till now.
- [on/off option toggle switch](https://dev.to/karandeveloper/how-to-create-a-custom-toggle-switch-using-css-4pmi) - I used this at first , and could get it to work to toggle , using the mouse, never tested correctly for keyboard as I was testing using the spacebar/enter key.
- [Accessible keyboard shortcuts](https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/) - Keyboard focusable elements. The use of :is is also new to me.
- [two separate options toggle switch](https://www.sarasoueidan.com/blog/toggle-switch-design/#if-the-switch-toggle-is-supposed-to-explicitly-offer-and-enable-two-separate-options%3A-public-and-private) - It was not explained in detail, but I figured out the code by playing around with in in her codepen
- [freecodecamp post](https://forum.freecodecamp.org/t/how-to-toggle-a-switch-button-with-target-when-the-user-uses-a-keyboard-to-focus/599211/9) -Thanks to freecodecamp.
## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)
