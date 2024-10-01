---
title: DMS1_POST016
published_at: 2024-09-12
snippet: Unity GreyBox Prototyping
disable_html_sanitization: true
allow_math: true
image: /images/sketch9.jpg
---

<img src="https://i.pinimg.com/originals/4a/55/c3/4a55c3a273541901ee3c82e91ddb3f2f.gif" alt="Description of Image" style="float:right; margin-left:20px; width:75px; height:auto;">

># **UNITY GREYBOX PROTOTYPING**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I began my Unity project by experimenting with a Greybox Prototype, which essentially an extremely rough 'sketch' of the game environment. I started by creating a 150 x 150 unit terrain for my map. I also installed the custom package, 'Terrain Tools' which adds a more detailed system for editing the terrain, I initally raised the terrain to 100 units on the Z - axis, I then used the 'Raise or Lower Terrain Tool' to began shaping my terrain, the reason I had raised it at the beginning was to allow me to lower certain parts of the terrain further, so I could create a beach inlet and lakes. 

## **GREYBOX TERRAIN**

<img src="UnityDocumentation\grey1.gif" alt="greyboxgif1" width="1000" height="1000">

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
After creating the terrain, I began to use simple shapes to gather an idea of where different aspects would go in the environment, I used shapes like; cubes, ellipses, planes etc to give myself an idea of where objects like trees, rocks, buildings, and other props would go. This was very effective in helping visualise the busieness of the environment and whether or not I needed to add more or remove props from the environment.

## **UPDATED GREYBOX TERRAIN**

<img src="UnityDocumentation\grey2.gif" alt="greyboxgif1" width="1000" height="1000">

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The updated Greybox Terrain involved taking the generation of the Terrain to the next step of adding several different textures to the Terrain. (Also for both of these terrains, I had already created an implemented a water system before making the terrain, this was done because I wanted to mold the terrain layout around/using the existing water.) I created grass + dirt textures, which I applied first to the entire terrain. After the base layer was applied to the terrain, I used a simple sand texture to draw upon the terrain, creating a simple path around the map.


<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The purpose of this path would be to guide the player throughout their exploration. After creating the path layer. I used a rock and snow texture to create realistic mountain ranges across the map. I had already created mounds/elevated areas on the initial greybox terrain that I knew would serve as mountains. After I had essentially finished creating the basis of the terrain. I had began experimenting with adding foliage to the environment, and the possibility of implementing invisible collider walls around the area, to keep the player contained within a restricted environment.

### **FOLIAGE INSPIRATION**

<div style="display: flex; justify-content: center; gap: 20px;">
    <div style="text-align: center;">
        <img src="https://i.ytimg.com/vi/cXWlgP5hZzc/maxresdefault.jpg" alt="Foliage1" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Firewatch, 2016</p> 
    </div>
    <div style="text-align: center;">
        <img src="UnityDocumentation/map1.2.jpeg" alt="Foliage2" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Nature Environment.2</p>
    </div>
    <div style="text-align: center;">
        <img src="UnityDocumentation/map2.jpeg" alt="Foliage3" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Urban Environment</p>
    </div>
</div>