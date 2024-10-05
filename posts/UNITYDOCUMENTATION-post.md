---
title: DMS1_POST019
published_at: 2024-09-28
snippet: Unity Assignment 3 Documentation
disable_html_sanitization: true
allow_math: true
image: https://i.pinimg.com/564x/47/df/b5/47dfb52145e30807c5fe392ac5607720.jpg
---

<img src="https://i.pinimg.com/originals/99/61/cc/9961ccda7b81f0a2ae64754b72fbf53a.gif" alt="Description of Image" style="float:right; margin-left:20px; width:75px; height:auto;">

## **CREATING LIGHT SWITCH AND FLICKERING LIGHTS**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
After creating other interaction systems, I had decided I wanted to create Light Switches and Flickering Light Systems. To create the Light Switch, I imported a free light switch model from Sketchfab into my project and free hanging light models. 

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/switch.png" height="1000" width="1000"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
Once I brought the model into my scene, I created a box collider to the object and made it a trigger. I then applied I script I had made for the switch. Essentially there is two seperate objects for the off switch and on switch, the script tells the object that when it is interacted with the off object deactivates and the on object activates, it also tells the machine to turn the linked spot light on and play a light turning on sound. The script also uses 'InReach' so when the player is looking at the switch a interact text will appear.

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/code.png" height="1000" width="1000"/></div>
</div>

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/onoff.gif" height="1000" width="1000"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
That was essentially the basics of the light switch, this coding format was very straightforward and easy to do. To create the flickering lights, I imported an 'industrial' light beam into my scene, and created a new spot light.

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/industry.png" height="1000" width="1000"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I then created a script for the light flickering, this script essentially controlled the light OB in the scene, the Min and Max time for its flickering, which changes the rate/speed at which the light turns on and off. The script also controls the light audio, telling the game to play the audio whenever the light turns off. I also gave the Light OB and audio source, made it's spacial to 3D and changed roll off to Linear, I could then use the same light OB in the 'Light Sound' field.

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/flicker.png" height="1000" width="1000"/></div>
</div>

---

## **CREATING THE SLIDING DOORS**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
To create the sliding doors in Unity, the basics of this process were very similar to making the other interactive doors within Unity. I first added a convex mesh render to each sliding door, I then added the animator role to each door. Then using the animation tab, I created animations similar to the door animations for the hinge door; an idle, open and close animation. I then applied the animation loop for each door into the 'controller' tab. I then created a New Behaviour Script to the door, the purpose of this script was to tell the doors to play the animation when the player is within a certain area. It created inputs for; the animaiton, the player and the door obj.

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/sliding door.png" height="1000" width="1000"/></div>
  <div class="image-container"><img id="icon3" src="unity/animator.png" height="1000" width="1000"/></div>
</div>

---