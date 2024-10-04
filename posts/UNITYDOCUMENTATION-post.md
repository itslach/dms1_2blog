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

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/switch.png" height="1000" width="1000"/></div>
</div>

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
Once I brought the model into my scene, I created a box collider to the object and made it a trigger. I then applied I script I had made for the switch. Essentially there is two seperate objects for the off switch and on switch, the script tells the object that when it is interacted with the off object deactivates and the on object activates, it also tells the machine to turn the linked spot light on and play a light turning on sound. The script also uses 'InReach' so when the player is looking at the switch a interact text will appear.


<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/code.png" height="1000" width="1000"/></div>
</div>