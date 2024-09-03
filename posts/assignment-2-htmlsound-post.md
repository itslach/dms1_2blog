---
title: DMS1_POST013
published_at: 2024-09-01
snippet: Assignment 2 HTML + Sound
disable_html_sanitization: true
allow_math: true
image: /images/sketch7.jpg
---

<img src="https://www.hardjewelry.com/cdn/shop/files/ezgif.com-gif-maker_3.gif?v=1649272041" alt="Description of Image" style="float:right; margin-left:20px; width:75px; height:auto;">

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

# **AUDIO SOURCES**

<div class="row">
        <div class="image-container"><img id="draft" src="ss1/studio.png" height="400" width="400"/></div>
        <div class="image-container"><img id="experiment" src="ss1/soundly.png" height="400" width="400"/></div>
    </div>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
The two softwares above are where I gathered the audio for my icons. Youtube Audio was great for finding some inspiration for sounds and some basic sfx that I decided to use in my project, whereas Soundly was another great alternative I found, that in it's free subscription had over 300 different sfx to use. I decided it would be alot easier to use copyright free audio for my icons, rather than create my own sounds, and would allow me to be more creative with my choices. 

## **LICENSING**
<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
All sounds used for my icons were copyright free media, I made careful consideration to make sure all the media was available for commercial/personal use. Soundly uses a User End License Agreement, which essentially means the user has license to use the products, but not have ownership over them, and Youtube uses the 'Youtube Audio Library License', in which users can use their free sounds throughout videos, monetized or not but cannot personally distribute any of Youtube's audio files for financial gains. Below you will find a list of the audio files I used accompanied by their; category, platform, and license type.


<ul class="custom-list">
  <li>Water Running By - <strong>WATER</strong> - <strong>YOUTUBE</strong> | Youtube Audio Library License</li>
  <li>Crickets With Distant Traffic - <strong>AMBIENCES</strong> - <strong>YOUTUBE</strong> | Youtube Audio Library License </li>
  <li>Voices,Baby,Laughing,Giggling - <strong>VOICES</strong> - <strong>SOUNDLY</strong> | End User License Agreement</li>
  <li>Wind,Vegetation,Forest,Leaves 01 - <strong>WIND</strong> - <strong>SOUNDLY</strong> | End User License Agreement</li>
  <li>Ambience,School,High School,Yard - <strong>AMBIENCE</strong> - <strong>SOUNDLY</strong> | End User License Agreement</li>
  <li>Human,Snore,Male Snoring 02 - <strong>HUMAN</strong> - <strong>SOUNDLY</strong> | End User License Agreement</li>
  <li>Musical,Chime,Wind Chimes,Ringing - <strong>MUSICAL</strong> - <strong>SOUNDLY</strong> | End User License Agreement</li>
  <li>Designed,Drone,Dark,Ominous Swells - <strong>DRONE</strong> - <strong>SOUNDLY</strong> | End User License Agreement</li>
  <li>Magic,Elemental,Ice Spell,Shimmer - <strong>MAGIC</strong> - <strong>SOUNDLY</strong> | End User License Agreement</li>
</ul>

<style>
.custom-list {
  list-style-type: none; /* Remove default bullets */
  padding: 0; /* Remove default padding */
}

.custom-list li {
  background-color: #f0f0f0; /* Light background color */
  padding: 15px; /* Padding inside each list item */
  margin: 10px 0; /* Spacing between list items */
  border-radius: 15px; /* Rounded corners */
  display: inline-block; /* Ensure the background fits the text size */
  width: fit-content; /* The box only as wide as the content */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow for a subtle 3D effect */
  font-family: Arial, sans-serif;
}
</style>

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
After I had acquired all my desired sounds, I had to put them through audition to make them fit to how I needed them. Firstly I had to cut every sound bite to be 2 seconds, as this is the duration of time that each icon would change for. After trimming each clip, the next step is to add a small fade to the beginning and end of the audio clip, this is to avoid any clicking of the sound at the start of each play, and ultimately make it alot smoother. Lastly before exporting I had to Normalize the audio and compression of the file, this helps to make all the quieter parts of the snippet louder without the audio clipping. Below is screenshots of me completing this process.


<div class="row">
        <div class="image-container"><img id="draft" src="ss1/snipping.png" height="200" width="200"/></div>
        <div class="image-container"><img id="experiment" src="ss1/fade in.png" height="200" width="200"/></div>
        <div class="image-container"><img id="first2" src="ss1/normalize.png" height="200" width="200"/></div>
    </div>

---

<img src="ss1/repeat.png" alt="firstss" width="500" height="500">

---

<style>
  .custom-font {
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<p class="custom-font">
After having all my audio configured and ready for my html website, I began repeating the css code for each icon, until all nine icons had a unique alternate icon and sound, below is an attached video of each icon in it's working state.

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/e884df69acd8487ba1d87bfef959186f?sid=14662dfe-bcb3-41c2-ab97-d5b00636e12e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
