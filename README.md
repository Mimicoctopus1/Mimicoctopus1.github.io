# OJVJPJ.game

### Inside Code

* index.js renders the client files by displaying `public/client.html`.
  * I use [this tutorial](https://www.w3schools.com/nodejs/nodejs_email.asp) to send emails.
* public folder
  * `public/client.html` imports `public/client.css` and runs `public/client.js`.
  * Uses everything found in [this](https://www.freecodecamp.org/news/upload-files-with-html/) tutorial to get files from users.
  * Screen recording with this [DEV.to](https://shorturl.at/erzMN) article. It might take a while to understand but it's worth it.
  * Pointer Lock API to lock the pointer, which doesn't freeze the pointer in place but hides it, allows it to go past the edges of the screen, makes all events go to a single element, and gives special data during the lock session.
* Uses socket.io for websocket API (for lack of better resources).
* .env is the environment variables (secrets) file. I don't use this for user data because when you edit it from JS, you can't
make it show in the actual file. However, I do store the password to my GMail forget-your-password emailer as well as the link to where I store all the user media.
* You can't see the `.data` files because the .data folder is hidden and you can only access it from the terminal, only nobody 
can get to the terminal unless they're an editor, have the link, or have remixed the project, but when you remix the project, 
the .data folder disappears. If you're remixing this, you may want to create the .data/userdata.json file. The structure of the file looks something like this:
{  
  "username": {  
    "password": "password",  
    "media": ['https://example.com/one.png', "https://example.com/two.png"]  
  },  
  "JohnDoe": {  
    "password": "ooga-booga",  
    "media": ['https://cdn.leech.com/adfu9eufiue9fuiidoasuf9euo/dancing%20video.mvk']  
  },  
  "Mimicoctopus1": {  
    "password": "abc123",  
    "media": ['https://example.com/NO, that is NOT my real password.']  
  }
}




* .gitignore tells which files for git to ignore
* LICENSE is the MIT LICENSE document.
* README.md is this file, which explains everything about this repository.
* game.json is the big file of everything in the game. It saves data that isn't stored in .env, such as not-so-secret character
info (everything but usernames and passwords.) it has every building and characeter. If you are remixing this for world 
building, this is where you want to go. Note: this updates as players play the game, so don't wonder why it looks different
sometimes. 
[(more info here)](https://tinyurl.com/makefswork). I use node:fs to make the JSON files update 
([great tutorial here](https://www.atatus.com/blog/read-write-a-json-file-with-node-js/)).
* manifest.json is like package.json but it only is used when you download the file as a 
Progressive Web App ([TUTORIAL](https://dev.to/developertharun/convert-any-website-into-a-pwa-in-just-3-simple-steps-35pp)).
* media.mkv is actually a video file. When you stream a video in the game, this is where it goes. If you click it, you won't be very impressed, because it's just binary data. Now you may be wondering, what's stopping you from just downloading this video and watching it? Nothing but honor code and the fact that it is overwriten with a *special* video whenever I don't need the old one. If you'd like, download this entire project and watch that video in awe. Now you may be wondering why I wouldn't need the old, user-made video. That's because I upload it to somewhere partially safe. What I mean by partially is that if you have a certain link, you can delete everything in it. That link is saved in .env.
* package.json is the file in every Node.js repo that explains what you need to run it, how it imports, what it imports, its
version number, name, and description.
  
### Worldbuilders
* Map: To make your own maps, go to .data/game.json and put in your own OBJ and MTL urls as neccessary. Look to my [TinkerCad profile](https://www.tinkercad.com/users/b1G2lcK1dyz) to find my own models.
* Moves: When making your own move, effect is a string containing the code you'd like to run when the move is activated (you can also reference a different move like so:  
`"moves": {  
"punch": {  
  "effect": "something goes here."  
}  
"hit": "punch"  
}`  
and then hit does the same thing as punch)
* If you would like users to use their account (for this game) with your own remix of this game, insert this somewhere in your JS file:
`
import account from "https://unimono.sytes.net/account.js";
`
or this, if you know you are using CommonJS (a different syntax)
`
var account = require("https://unimono.sytes.net/account.js);
`
and you're ready to start. In the JS file, you can use these functions:
`
account.requestAccess(function() {/*Do something*/}, function() {/*Do something else*/}) /*This will open a popup for the user to grant access to your site.*/
`

### To-Do
If you would like to have a feature added to the game, please request to edit and send me a message the request and I will add it here, but it doesn't pop up, I'm sorry but that means I can't figure it out. Also, if you remix my project and add something cool, I would like to add that to
mine as well, so please let me know by requesting to edit and, again, putting a message in the request. If you want to find the spots where I am hoping to change something, click the search bar above or type Ctrl + ; and type "todo". Then click on `search files for 'todo'`. It will show you the spots under construction.
* Make whitelist for chat.
  * Allow people who know each other in real life to chat without the whitelist and with a blacklist instead to allow more freedom.
  * To prove you know somebody in real life, they must sign in on your end with their password, and you must sign in on their end with your password. You can be friends without doing this, but you will still have to use the whitelist.
* Create the stories.
* Finish fullscreen capablilty.


### Changelog
02/23/2024: Testing out appmaker.xyz's desktop app converter. Well, it gave me an error, so I'll try again later. The URL is https://appmaker.xyz/web2desk and it does advertise itself on the splash screen and is not as simple as one click since you have to check your email which takes more clicks, but it didn't email them and complained about a glitch, so oh well.
01/30/2024: I made an app out of this game that updates with the webpage. I just went on GitHub, made my username.github.io site into an iframe to this page, and went on [appmaker](https://appmaker.xyz/webapp) and made it into an app, and no, it's not a scam! It's absolutely free as of the date shown on the changelog dates column. The only catch is that when it says "Building, please wait...", it does mean to wait. Mine took about 10 minutes, so take a nap or do something else while you wait. Do note that the app will eventually come out free, though.
01/25/2024: I started working on move icons. For worldbuilders who want to make their own, go to aggie.io, click the arrow near start drawing and select 4000 x 4000, press U for rectangle, change stroke width to 100px, change the mode to stroke, hold shift and make a square as tall as the canvas, press G for fill, color the stroke of the rectangle, color the inside of the rectangle and draw the icon image (fist, sword, arrow, etc.) in black! Then, use the fill tool to fill in your icon image. Ctrl+S to download and go to [remove.bg](remove.bg) to remove the backgroundFor color guidance on what colors to use for the rectangle, here is a chart:
* Red: Offense, Heat
* Orange: Strength
* Yellow: Healing, Speed
* Green: Nature
* Blue: Defense, Cold
* Purple: Arcane
* Grey: Armor
* Black: Dark
* White: Light
* Khaki Brown: Gas
* Clear: undefined (error)
* Dirt Brown: Solid
* Cinnamon Brown: Physical (Non-magical), Liquid
* Pink: Magical (Non-physical)
01/25/2024: Made colors (Yes, I merged Indigo and Violet into purple since they are both in between Blue and Red.) To make your own colors from rgb to hex, go [here](https://www.google.com/search?q=rgb+to+hex&sca_esv=a2e9e5f3fe127901&rlz=1CAFQYM_enUS1059&ei=YNqyZfjqBKioqtsPqoee2Ag&ved=0ahUKEwj4mpKlxfmDAxUolGoFHaqDB4sQ4dUDCBA&uact=5&oq=rgb+to+hex&gs_lp=Egxnd3Mtd2l6LXNlcnAiCnJnYiB0byBoZXgyEBAAGIAEGIoFGEMYsQMYgwEyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESLUcUNUZWNUZcAN4AZABAJgBgwGgAYMBqgEDMC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp):
* Grey:   127.5, 127.5, 127.5 (7e7e7e)
* Brown:  200.0, 127.5, 000.0 (c87f00)
* Khaki:  255.0, 200.0, 100.0 (ffc864)
* Dirt:   100.0, 027.0, 000.0 (641b00)
* Red:    255.0, 000.0, 000.0 (ff0000)
* Orange: 255.0, 127.5, 000.0 (ff7e05)
* Yellow: 255.0, 255.0, 000.0 (ff0000)
* Green:  000.0, 255.0, 000.0 (00ff00)
* Blue:   000.0, 000.0, 255.0 (0000ff)
* Purple: 255.0, 000.0, 255.0 (ff00ff)
01/24/2024: FINISHED BUZZERS!  
12/21/2023: Working on signin and signup features.  
12/11/2023: Added tell, chat, and yell to the text command list.  