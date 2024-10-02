---
title: DMS1_POST017
published_at: 2024-09-13
snippet: Further exploration/creation of map iteration 1
disable_html_sanitization: true
allow_math: true
image: /images/sketch3.jpg
---

<img src="https://i.pinimg.com/originals/af/7f/7c/af7f7c06d8e82481b9a60000cc9d1522.gif" alt="Description of Image" style="float:right; margin-left:20px; width:75px; height:auto;">

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

## **DOCUMENTATION + ROADBLOCKS**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
Quite early into the creation of my Unity game, I had decided to experiment and research into using different render pipelines. The render pipeline is the framework within computer graphics, helping the computer create visual 3D scenes. Unity has 3 main pipelines; HDRP ( High Definition Render Pipeline), BIRP (Built-In Render Pipeline) & URP (Universal Render Pipeline). As a standard, new projects created in Unity are equipped with the Built-In pipeline, also being the original and oldest it also means it has alot of assets across the internet that can be used. I intentially was going to use this pipeline for my project, but I had began looking into different interactive grass systems. The one I was set out to recreate was only achievable in the Unity URP pipeline. I had researched into how I could do this and found that you can upgrade your render pipeline within a already created project, however when you upgrade from BIRP -> URP, all the textures/models have to updated and reimported, so it can be risky if your project was not intended for URP. Unforunately this was the outcome for my project when I upgraded to URP, all my textures and scripts had become unusable and corrupted and unfortunately this change cannot be undone without a back up file.

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I took this accident as a way to restart my project and create something better. I decided to take a different approach to the brief, and created a psx style, semi-open world exploration. I conveniently had created a game similar to this style in the past, although it was a more linear style which meant creating something more 'open world' was a newer concept to me.

---

## **CREATING METRO AREA**

<div class="row">
        <div class="image-container"><img id="metro1" src="UnityDocumentation/metro1.png" height="500" width="500"/></div>
        <div class="image-container"><img id="metro2" src="UnityDocumentation/metro2.png" height="500" width="500"/></div>
</div>

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I behan the creation of my new game by searching on SketchFab for free, premade asset scenes. I had in my mind that I wanted to create a subway station area, with a small open world area above ground. After importing the metro asset I had found into Unity, I applied 'Mesh Colliders to every object in the scene, this would allow the player to collide with objects instead of clipping through them, and because the collider is built off the mesh it has a more accurate collision then a 'box collider' or 'capsule collider'.

<div class="row">
        <div class="image-container"><img id="metro1" src="UnityDocumentation/people1.png" height="500" width="500"/></div>
        <div class="image-container"><img id="metro2" src="UnityDocumentation/people2.png" height="500" width="500"/></div>
</div>

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">