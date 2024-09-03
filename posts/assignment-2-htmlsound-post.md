---
title: DMS1_POST013
published_at: 2024-09-01
snippet: Assignment 2 HTML + Sound
disable_html_sanitization: true
allow_math: true
image: /images/sketch7.jpg
---

<img src="https://www.hardjewelry.com/cdn/shop/files/ezgif.com-gif-maker_3.gif?v=1649272041" alt="Description of Image" style="float:right; margin-left:20px; width:75px; height:auto;">

># **ICONS ON HTML WEBSITE**

<img src="ss1/establishing.png" alt="firstss" width="500" height="500">

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I started uploading my icons to my html by adding style css to the < head > of my code, in which the image container and row components were clarified, essentially informing the system of how the row's variables should be measured and padding it needs to apply.
<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
I then added in the DIV containers, the purpose of these is to hold all the image information for each icon. In each div container I added 3 icons, clarifying their; class, image source, image ID and the height and width of each image. The image source tells the machine where to retrieve the image from and the image ID is a value that will be useful later on when adding the alternative image.

# **THE HTML PAGE LAYOUT**

<img src="ss1/html.png" alt="firstss" width="500" height="500">

---

<img src="ss1/imagechange.png" alt="firstss" width="500" height="500">

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The next step once everything on the html was loading properly was to add in new css, which would allow the user to press on the icon, making it change to it's alternate icon and playing a noise when clicked. The above script essentially tells the machine to retrieve the initial icon from it's ID and audio from it's relative path. The 'onpointerdown' command means that when the user clicks on the icon, the 'icon1' audio will play and change to the variable from its path source, and back to original icon. The line 'setTimeout' and variable '2000' is telling the machine how long the second icon should appear on screen for, before changing back to the original icon. There is an example of this in use for my first icon in the below video.

 **VIDEO EXAMPLE OF ICON 1 CHANGE**

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/792e540572e646cf9f48f9aa1c661834?sid=c478e244-0d31-447a-b34a-5bdd27b9e8db" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
Now that I had the system for the icon to change working, all I had to do was repeat the same code for the other 8 icons, and find/or record another 8 audio samples for the icons. My first idea for the audio would be that the audio that plays when pressing the icon would be a sample snippet of each sleep sound.

># **ICON SOUND EXPERIMENTING**

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

**AUDIO SOURCES**

<div class="row">
    <div class="image-container"><img id="sound" src="ss1/soundly.png" height=350" width="350"/></div>
    <div class="image-container"><img id="youtubestudio" src="ss1/studio.png" height="350" width="350"/></div>
</div>

