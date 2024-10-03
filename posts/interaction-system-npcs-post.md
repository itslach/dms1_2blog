---
title: DMS1_POST018
published_at: 2024-09-27
snippet: Unity Interaction System + NPC Interaction
disable_html_sanitization: true
allow_math: true
image: https://i.pinimg.com/originals/8d/6a/50/8d6a508af1ab6e11e3698746f2882965.gif
---
<style>
        .row{
            width:1000px;
            margin: 10px auto 10px auto ;
        }
        .image-container {
            display: table-cell;
            vertical-align: middle;
            padding: 10px;
        }
 </style>

# **CREATING THE INTERACTION SYSTEM**


<p class="custom-font">
To start creating this interaction system, I found a simple FPS controller, with the ability to jump, sprint, and zoom in. This controller consists of a Main Camera and Capsule Collider, the Main Camera is attached as a child behind the capsule collider, and essentially serves as the viewport and space for interaction in the controller. I also created an empty parent named 'HUD', to serve as a place for holding all interaction text, sounds and the Unity Canvas. The Canvas tells the system where to display any text or other graphic aspects of the game on the player's screen. 

---



<img src="UnityDocumentation/FPScontroller.png" alt="FPSCONTROLLER" width="1000" height="1000">

 <style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
From there I created a simple 'Reach' system by attaching a cube to the Main Camera, I then stretched it and changed it to look like a long arm coming out from the player, I then attached a collider to this object and removed the mesh renderer. The purpose of this is allow the user to interact with objects and NPCS. 

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The first Interactable I aimed to create was a locked door system, with a lootable key that could be used to unlock it. To start creating these I acquired a free door asset and key asset from Sketchfab.

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/key.png" height="1000" width="1000"/></div>
</div>

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/Details.png" height="1000" width="1000"/></div>
</div>

 
<div class="row">
        <div class="image-container"><img id="icon2" src="unity/InReach.png" height="1000" width="1000"/></div>
    </div>

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/inventoru.png" height="1000" width="1000"/></div>
</div>
   ---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I placed the key into my scene and gave it a box collider, then assigned the collider to be a trigger. The next step was to create a script for picking the key up. I created a new script in VSCODE named 'Pick Up Key Script', in which i created a public bool called 'inReach', this bool uses information from the Reach tool I created previously on my character. The basis of the code is that when the player is within reach of the key, the 'Pick Up' text will be displayed to the player, while the invOB field that stays false is referring to the inventory object I created in the player, this inventory is a simple way of 'fakely' storing items on the player to be used with interactions. on void Update, the code block is telling the machine that when the player is within reach and the 'Interact' input has been pressed, the keyOB is set to false, making it disapper, a sound plays upon input, the key object within the inventory is set to active and the pickup text disappears.

