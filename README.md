Beycord Bey Kit
===============

To use this kit, you must make sure your device supports JavaScript and have [Node.js](https://nodejs.org/en/) (12.0.0+ version required) installed. Next, download this git repository into your computer. Once it has finished downloading, open your Node.js command prompt/terminal, "cd" your way to where the folder is installed and type the following in the command terminal:
```
npm install discord.js fs --save
```
Boom! You have done setting up your computer and it's ready to make Beys.

Table of Contents
=================
• [What is Beycord?](#what-is-beycord)  
• [How to use the Bey Kit](#how-to-use-the-bey-kit)  
• [Why should I make a Bey for Beycord](#why-should-i-make-a-bey-for-beycord)  
• [Help! My eyes hurt looking at the code!](#help-my-eyes-hurt-looking-at-the-code)  
• [Documentation](#documentation)  
• [IMPORTANT NOTES](#important-notes)  

# What is Beycord?
Just google it and click the first result **that is not an ad**. K thanks!

# How to use the Bey kit
1) Read the documentation section below to know how to make a special move.
2) Go to beycord-bey-kit/kit/beys and clone template.js
3) Rename the template.js to something like BeyNameWithSpacesAndSpecialCharactersGone.js and place it in the same folder as the normal template.js.
4) Open the renamed template.js and there should be comments to teach you how to code a Bey which should be easy to the point that even people who don't know JavaScript can make one. All you need to know is some basic knowledge of how Beycord works and know MATH.
5) Once you have finished modifying the cloned-and-renamed template.js. Open the command terminal, "cd" your way to where the Beycord Bey Kit folder is downloaded and type "node check.js" with "s removed.
6) Check.js should now help you check if there are any errors and tell you if there are any.
7) If Check.js tells you that there were no errors and your Bey is ready. Email the cloned-and-renamed template.js along with your Discord username and discriminator and anything that you want the submission reader to take note to [submissions@overcold.cf](mailto:submissions@overcold.cf).
8) Done! Just sit back, relax and wait for your submissions to be read.

# Why should I make a Bey for Beycord?
Ok so here’s a few reasons:
1) You can show off to people and be like: “OI!! I made that Bey! You see how high-IQed I am??!?”
2) A special role on the Overcold server.
3) A chance of getting your own Bey in the first few IDs so its valuable and you can trade it for many Valtz. 👀👀👀
4) You can make a Bey however you want and you can learn JavaScript while making a Bey with the help of comments written in the template.  

Here are some satisfied Bey makers' quotes:  
**DraconicSpeaker#3192**: "Well, once you got it setup and figured out, it's super easy to go through and just comes down to figuring out how you want the bey to function. It's actually pretty friggin fun to use too, especially setting up special moves with their special mechanics and such."  

# Help! My eyes hurt looking at the code!
Oh is that so? Don't worry, I got a solution here for you. Simply install one of the recommended code editors. They colo(u)r the code, making them more easier to look at, and **guide** you through when you are coding. Ya, that's how handy their are.

Here are some recommended code editors:
1) [Visual Studio Code](https://code.visualstudio.com/)
2) [Notepad++](https://notepad-plus-plus.org/)
3) [Atom](https://atom.io/)
4) [Brackets](http://brackets.io/)
5) [NetBeans](https://netbeans.org/)

I personally use and recommend Visual Studio Code because **YES** (you will get why when you install it) but others also have parts that they can do well where Visual Studio Code can't. All code editors have their ups and downs, just choose one that fits you the most.


# Documentation
__**Classes**__:
How classes are shown is classname: [ properties that can be modified ] (aliases)  
**player**: [  
             **hp**: The player's Hitpoints. [Int]  
             **atk**: The player's damage dealt to the other player. Can be used to reduce damage from the opponent. [Int]  
             **stamina**: The player's stamina [Int]  
             **bey**: An extended Beyblade class. Basically a player’s Bey. For more info, go to kit/class/Beyblade.js for the unextended version and kit/beys/template.js for the template of an extended Bey. [Beyblade]  
             **maxhp**: The player's max HP. [Int]  
             **maxstamina**: The player's max stamina. [Int]  
             **sp**: The player's special energy charge up. [Int]  
             All properties from the [Discord User class](https://discord.js.org/#/docs/main/stable/class/User) can also be accessible.
            ] (acted, victim)  
            
# IMPORTANT NOTES
No, the player in the special function is **not** a player class. It's the old database that Beycord used and I am too lazy to remove it so I just kept it there. Just in case the old player database still have some purpose (which it should not). I left it there just in case. The player classes accessible are acted and victim and others are not player classes. Int, aka Integer, are numbers.
Make sure you change RichEmbed with MessageEmbed **if you somehow still has it** to make sure that it is compatible as RichEmbed is renamed to MessageEmbed in a discord.js update.
You can use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) to upgrade your Node version.
