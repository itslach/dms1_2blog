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
            width:720px;
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

---

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

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I imported majority of the sounds I used from a platform called Soundly, they use a User License End Agreement and all other sounds used were imported from Youtube or Youtube Studio. After bringing an audio source I first had to make sure the sound would not play on awake, otherwise everytime the character spawned in, the audio track would immediately play.

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/sound.png" height="1000" width="1000"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The key aspects of each sound file that I had to change was the Volume Rolloff,  which was changed from Logarithmic to Linear, this provided a quicker falloff of the sound when the player moves away from the area. I also changed the Spatial Blend from 2D to 3D, this was done so the audio surrounded the player, instead of coming from one direction.

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/door.png" height="1000" width="1000"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The next step in my interaction system was to create a rigged and functioning door opening system. This was a relatively easy process to complete, I first started by importing this door asset into my Unity project. I then created an empty Parent and placed it on the right middle side of the door, attaching the prop to this empty object, this would act as the origin that the door would turn on, that way the animation looked realistic. The next step was to give the door a mesh collider, and to create a seperate box collider that was locked to the position of the handle, this object was set to trigger and served as the object that keeps the door locked until the key is interacted with it.

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
Once I had the basics of the door set up and rigged, I moved onto the animation. I made 3 animation states; Idle, Opened and Closed. The Idle animation was very basic to do, all I did was create a new clip and not change anything about the door's position. For the Open animation, I left the door as Idle at the start of the animation, then moved to 50 frames, and set the door's position to open, this animated the door opening over the 50 frames, and to create the Closed animation I just reversed this. (I copied this animation for the rest of the doors throughout the game aswell).

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/dooropen.gif" height="1000" width="1000"/></div>
  <div class="image-container"><img id="icon3" src="unity/doorclose.gif" height="1000" width="1000"/></div>
</div>

---

### **CREATING THE DIALOGUE SYSTEM**

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
To create the dialogue interaction system, I used a plugin called 'Dialogue Editor'. This free plugin for Unity makes creating a dialogue tree system very simple and straightforward. I started this process by creating a 3D cube, shaping it to a large square just peeking above the ground, this acts as the interaction area, by removing the mesh render, when the player moves within this area, they will be prompted to interact with the character.


<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/empty.png" height="1000" width="1000"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
After creating this object, I had to create a new script so that the object would actually work with the plugin, as it does not come with a starter. I created a new ConversationStarter script and added in code that would essentially tell the machine that when the user steps within the space, to set the interaction text to active and trigger the NPC conversation.

---

<div class="row"> 
  <div class="image-container"><img id="icon3" src="unity/convostarter.png" height="1000" width="1000"/></div>
  <div class="image-container"><img id="icon3" src="unity/npcconvo.png" height="1000" width="1000"/></div>
</div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
After I created a conversation, It was as simple as adding the conversation to the trigger object, and setting the interact key, for the rest of the NPC's I was able to copy this trigger object and create a new NPC Conversation.