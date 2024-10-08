---
title: DMS1_POST021
published_at: 2024-10-04
snippet: Assignment 3 Final Documentation
disable_html_sanitization: true
allow_math: true
image: https://i.pinimg.com/564x/88/32/81/8832811523f9ed8f8091f4d9d33f4f0e.jpg
---

<img src="https://i.pinimg.com/originals/34/26/6b/34266b9e1efd64196df58d4a1fc2b5f7.gif" alt="Description of Image" style="float:right; margin-left:20px; width:75px; height:auto;">

<style>
        .row{
            width:720px;
            margin: 10px auto 10px auto ;
        }
        .image-container {
            display: table-cell;
            vertical-align: middle;
            padding:20px;
        }
 </style>

# **FINAL DOCUMENTATION OF PROCESSES**

### **TOWN SCENE CREATION**

<div class="row">
        <div class="image-container"><img id="metro1" src="unity/town.png" height="500" width="500"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I wanted to create a scene of a run-down style area/town because I thought it invoked a sense of sadness that I felt when I was moving away from home, which I wanted to subtly reflect onto the player. I created this scene by acquiring free building and road assets from the UNITY ASSET STORE. After acquiring these assets, I realised they came with a terrain prefab as well, it was perfect for the vibe of the town with grey soil and desolate areas. I imported it into my scene and immediately realised it was alot larger than the designated 300x300 area. To overcome this challenge I created invisible barriers around the town, this was doneto keep the player within the intended play area. 

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
Once I had the area setup, I needed to create a hole that would fit the entrance to the metro subway, I achieved this by first pulling the metro scene into the town scene, overlaying the entrance slightly above the ground. Then using this as a guide I used the Paint Holes editor on the terrain, by then reducing the brush size to 2 and opacity to 20, I was able to create very specific holes that would help e to accurately cut out the terrain.

### **TELEPORT + PORTAL CREATION**

<div class="row">
        <div class="image-container"><img id="draft" src="unity/portal.png" height="250" width="250"/></div>
        <div class="image-container"><img id="experiment" src="unity/teleporter.png" height="250" width="250"/></div>
    </div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The purpose of creating a Teleporter/Portal system in my game was to help the player traverse through different environments, the player was intended to start off in a environment very similar to my bedroom, then to travel to a forest scene, I modelled this forest as closely as I could to one that used to lie beyond my old home, that I would go out into frequently. From here the player would then traverse to environment of a long road with an overpass, with a sole house on the right of the road. This house represents me moving to a new home, from there the player travels to the run-down town and metro scene, where the story ends.

---

<div class="row">
        <div class="image-container"><img id="draft" src="unity/teleportscript.png" height="250" width="250"/></div>
        <div class="image-container"><img id="experiment" src="unity/script.png" height="250" width="250"/></div>
    </div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
To create the teleport system, I started by creating a 3D cube, positioning it and scaling it to the size I wanted, removing it's mesh renderer and assigning it's collider to be a trigger. After that I created a new C# script and named it 'teleport'. In this script I designed a code to essentially tell the machine that when the assigned player object colliders with the cube's box collider, it will move the player's position to the designated area. I assigned this area later on by creatinga new 3D cube, putting it in the forest scene, and removing the mesh renderer. I named this cube the 'reciever' and assigned it in the destination field of the script. There was a slight glitch with this script that the player wouldn't teleport exactly to the spot of the reciever but somewhere near it, I countered this by just adjusting the location of the reciever.

---

### **CREATING SOLD HOUSE SCENE**

<div class="row">
        <div class="image-container"><img id="metro1" src="unity/sold.png" height="500" width="500"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
One of the last scenes I created was a large modern house on an empty road. Out the front of this house is a man sitting on the back of his car, along with piles of boxes out the front and a 'SOLD' sign. I created this scene as a reflection of me finding my own place in a new area, I placed a NPC in this scene for the character to interact with, they tell them about living in a new place. At this point I was struggling to connect these various scenes to the final old town scene, so I decided to make it that this NPC tells the player about this old town, and that they must travel to it to understand the truth about their future.

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I acquired all the assets for this scene from Sketchfab and after importing them into my game, I resized them to fit the scale of the environment and added their correct texture and mesh colliders. Once the layout of the scene was finalised, I added a final teleporter and portal at the edge of the play area, for the player to discover and traverse to the final scene.

### **MAKING THE MAIN MENU**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
To create the main menu scene, I simply used a menu prefab that I had acquired from the Unity Asset Store, after this I added my game scene to be the first loaded scene, after the main menu, I added custom text for my game title and removed the social media aspects and background, I then changed the button and title colours and added a custom particle layer for depth. 

## **CREATING WORKING TV**

<div class="row">
        <div class="image-container"><img id="metro1" src="unity/begin.png" height="500" width="500"/></div>
</div>

---

