---
title: DMS1_POST015
published_at: 2024-09-09
snippet: Beginning of Unity, Assignment 3 Brainstorming
disable_html_sanitization: true
allow_math: true
image: /images/sketchfac.jpeg
---

<img src="https://i.pinimg.com/originals/34/aa/ed/34aaed194ba031c080749a21259955a2.gif" alt="Description of Image" style="float:right; margin-left:20px; width:75px; height:auto;">

># **INITIAL BRAINSTORMING**

<div style="display: flex; justify-content: center; gap: 20px; margin: 0 auto; width: fit-content;">
  <img src="UnityDocumentation/brainstorming1.jpeg" alt="firstss" width="500" height="500">
  <img src="UnityDocumentation/brainstorming2.jpeg" alt="firstss" width="500" height="500">
</div>


---
## **BRAINSTORMING INSIGHT**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
Initially, when reading through the brief for assignment 3, I had a variety of possible ideas I wanted to pursue, my first idea was to create an expansive open terrain environment, that a player would traverse through during a quicker day-night cycle, with lots of random, player triggered events occuring, the open-environment map would have different water aspects for the player to traverse over and high mountain ranges. I also knew I wanted to implement some sort of npc and interaction system, to create a companion for the player that would guide them through the map. Below I have various inspiration for the first style of game I wanted to create, I was taking heavy inspiration from the popular game 'Legend of Zelda' as it's art and play style were very similar to what I wanted to create.

### **LOW POLY INSPIRATION**
<div style="display: flex; justify-content: center; gap: 20px; margin: 0 auto; width: fit-content;">
    <div style="text-align: left;">
        <img src="UnityDocumentation/breath.jpg" alt="firstss" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Legend of Zelda, Breath of the Wild, 2017</p>
    </div>
    <div style="text-align: left;">
        <img src="UnityDocumentation/lowpolydude.webp" alt="firstss" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Sludge Life, 2020</p>
    </div>
    <div style="text-align: left;">
        <img src="UnityDocumentation/eldenring.jpg" alt="firstss" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Elden Ring, 2022</p>
    </div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
My second idea was to create a PS1, semi-open world game. During this time I was highly interested in retro/indie style ps1 horror games, these tended to be made by smaller teams/projects and are highly unappreciated. This idea also stood out to me as I had experience creating within this field, during my time in highschool, I spent a year creating a ps1 style procedural horror game for my multimedia major project, which meant I had some level of experience not only creating environments for this genre, but also designing and creating 3D assets, shaders and textures. I took heavy inspiration from a PS1 game that was actually made using the unity engine, called 'Bloodwash'. This horror style game uses audio in a super effective way, immersing the user in the environment, and making every jumpscare more effective. I also took inspiration from several other PS1 style games, including games like 'Silent Hill' and etc.

### **PS1 INSPIRATION**

<div style="display: flex; justify-content: center; gap: 20px;">
    <div style="text-align: center;">
        <img src="UnityDocumentation/bloodwash.webp" alt="bloodwash" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Bloodwash, 2021</p> 
    </div>
    <div style="text-align: center;">
        <img src="UnityDocumentation/silent hill.gif" alt="Silent Hill" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Silent Hill, 1999</p>
    </div>
    <div style="text-align: center;">
        <img src="UnityDocumentation/buckshot.gif" alt="Buckshot Roulette" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Buckshot Roulette, 2023</p>
    </div>
</div>

<div style="display: flex; justify-content: center; gap: 20px;">
    <div style="text-align: center;">
        <img src="UnityDocumentation/rewind.jpg" alt="bloodwash" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Rewind Or Die, 2023</p> 
    </div>
    <div style="text-align: center;">
        <img src="UnityDocumentation/deadlynight.gif" alt="Silent Hill" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Deadly Night, 2020</p>
    </div>
    <div style="text-align: center;">
        <img src="UnityDocumentation/hell.png" alt="Buckshot Roulette" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Night at the Gates Of Hell, 2022</p>
    </div>
</div>


---

# **MAP ITERATIONS**

<div style="display: flex; justify-content: center; gap: 20px;">
    <div style="text-align: center;">
        <img src="UnityDocumentation/map1.1.jpeg" alt="bloodwash" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Nature Environment</p> 
    </div>
    <div style="text-align: center;">
        <img src="UnityDocumentation/map1.2.jpeg" alt="Silent Hill" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Nature Environment.2</p>
    </div>
    <div style="text-align: center;">
        <img src="UnityDocumentation/map2.jpeg" alt="Buckshot Roulette" width="800" height="800">
        <p style="font-family: 'Courier New', Courier, monospace;">Urban Environment</p>
    </div>
</div>

## **MAP CONTEXT**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
When designing the first map for the player, I started by creating a random shape on my page, leaving a cut in the land for a water gate, as I knew I wanted to have a water system running through the middle of the map, after designing the inital shape, I created the mountain ranges along the outside of the map, the idea for this map was for it to be a lone island in the middle of the ocean, because I was using this idea it wasn't necessary to implement invisible colliders along the edges of the map, was I creaated mountain ranges I designed a simple guide path and tree population spots, the path was intended to be a simple sand path, providing the player with possible routes they may take. 

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
After creating the base of the map, I put in the loot spots and NPC's, there was intended to be atleast 4 NPCs across the map, although only 3 of them would be interactable, it would be crucial for the player to interact with these NPC's for guidance and lore. I had desired to place 2 loot areas in the map, for important items, the first spot was under a 'great tree' which will be a tree significantly larger than the others, drawing the player to it they would find a note with instructions of reaching a 'portal'. The second loot spot was at the base of a mountain, the player would reach a split path to reach this chest, in which they have to pick option 1 to find the chest and acquire a key to unlock the portal, if the player picks option 2 (going right), they would ultimately reach the portal and be unable to traverse, in which they would be given a hint of where to go and backtrack to the split option area.

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
When the player reaches the lake, a 'player triggered event' would start, in which a second, small island rises from within the lake, surrounded by several, smaller platforms for the player to parkour up to the island. Once the player reaches the top, they will find a collectionof trees, with a mysterious NPC standing beneath the trees. The NPC informs the player they are their father and that they must find the portal and go through it to unlock their future.

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
When the player reaches the portal, there will be a 4th NPC standing by the portal, who tries to convince the player that a great evil lies beyond the portal, and that they will regret going through. The player must decide whether they want to take the risk and ultimately traverse through the portal to the second map.

### **SECOND MAP**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The second map is a significantly smaller area, that presents itself as a semi-open world environment, still restricting the player to explore within an intended space. I wanted to create a engaging environment that would be like taking a chunk out of a city, with one side being a residential/park style area, and the opposite side being some sort of business/shopping area. The map would be presenting several sounds to the player as they traverse the environment. Ranging from ambient, situational sound effects, to different musical harmonic pieces and some urban sfx; cars driving, beeping, dialogue, AC machines etc. With all these different sounds working together, they would effectively encapsulate the player into the scene and create a stronger sense of immersion.