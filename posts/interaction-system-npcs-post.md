---
title: DMS1_POST018
published_at: 2024-09-27
snippet: Unity Interaction System + NPC Interaction
disable_html_sanitization: true
allow_math: true
image: https://i.pinimg.com/originals/8d/6a/50/8d6a508af1ab6e11e3698746f2882965.gif
---

# **CREATING THE INTERACTION SYSTEM**

<style>
    .row {
        display: flex;
        justify-content: space-between; /* Distributes the images */
        align-items: center;
        flex-wrap: nowrap; /* Prevents wrapping to new lines */
        margin: 10px auto;
        width: 100%;   /* Full width */
    }

    .image-container {
        flex: 1;
        padding: 10px;
    }

    img {
        width: 100%; /* Fills the container */
        height: auto; /* Maintains aspect ratio */
    }

</style>

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


<div class="row">
  <div class="image-container">
    <img id="metro1" src="unity/key.png" alt="First Image" />
  </div>
  <div class="image-container">
    <img id="metro2" src="unity/Details.png" alt="Second Image" />
  </div>
  <div class="image-container">
    <img id="metro3" src="unity/InReach.png" alt="Third Image" />
  </div>
  <div class="image-container">
    <img id="metro4" src="unity/FourthImage.png" alt="Fourth Image" />
  </div>
</div>