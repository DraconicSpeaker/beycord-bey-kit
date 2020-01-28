# Beycord Bey Kit

To use this kit, you must make sure your device supports JavaScript, have [Node.js](https://nodejs.org/en/) installed. Next, download this git repository into your computer. Once it has finished downloading, open your Node.js command prompt/terminal, "cd" your way to where the folder is installed and type the following in the command terminal:
```
npm install discord.js fs --save
```
Boom! You have done setting up your computer and it's ready to make Beys.

# How to use the Bey kit?
1) Read the documentation section below to know how to make a special move.
2) Go to beycord-bey-kit/kit/beys and clone template.js
3) Rename the template.js to something like BeyNameWithSpacesAndSpecialCharactersGone.js and place it in the same folder as the normal template.js.
4) Open the renamed template.js and there should be comments to teach you how to code a Bey which should be easy to the point that even people who don't know JavaScript can make one. All you need to know is some basic knowledge of how Beycord works and know MATH.
5) Once you have finished modifying the cloned-and-renamed template.js. Open the command terminal, "cd" your way to where the Beycord Bey Kit folder is downloaded and type "node check.js" with "s removed.
6) Check.js should now help you check if there are any errors and tell you if there are any.
7) If Check.js tells you that there were no errors and your Bey is ready. Email the cloned-and-renamed template.js along with your Discord username and discriminator and anything that you want the submission reader to take note to submissions@overcold.cf.
8) Done! Just sit back, relax and wait for your submissions to be read.

# Why should I make a Bey for Beycord?
Ok so here’s a few reasons:
1) You can show off to people and be like: “OI!! I made that Bey! You see how high-IQed I am??!?”
2) A special role on the Overcold server.
3) A chance of getting your own Bey in the first few IDs so its valuable and you can trade it for many Valtz. 👀👀👀
4) You can make a Bey however you want and you can learn JavaScript while making a Bey with the help of comments written in the template.

# Documentation
__**Classes**__:
How classes are shown is classname: [ properties that can be modified ] (aliases)  
**player**: [  
             **hp**: The player's Hitpoints  
             **atk**: The player's damage dealt to the other player. Can be used to reduce damage from the opponent.  
             **stamina**: The player's stamina  
             **bey**: An extended Beyblade class. Basically a player’s Bey. For more info, go to kit/class/Beyblade.js for the unextended version and kit/beys/template.js for the template of an extended Bey.
            ] (acted, victim)  
