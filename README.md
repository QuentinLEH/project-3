# project-3

GOAL -> to create an interactive website, like a game "style', feel to be traveled

There are 3 web pages:
- The main one, the landing page, where you can switch between day and night
- An other one, animated, when you click on the character during the day
- A last one, also animated, when you click on the eagle during the day

So you can switch between day and light on the main page (landing page), made by the "DAY-NIGHT" part on "main.css".This  action will change the environment.
During the day, you can see a cloud animation (it is just an image, duplicated side-by-side, with a simple "translateY" animation on "main.css"), also an eagle flying in the air (animated with 2 differents animations: the first one is to make the eagle flap its wings, made an "opacity1/0" game between the 2 frames (on appeard and the other one disapear, and then vice-versa), and the second animation is for the entire eagle with a "translateY" animation, so the eagle looks like he is flying in the wind even more).
The character that you can see at the bottom of the page is IN the background image, so not animated yet here (integrated on the picture so he stick to the ground with the responsivness).
The eagle and the character have a clickable-point close to them, so we can click on it to open the other animated pages.

But during the night, the background image change to look like a night landscape, without clouds, and the eagle is not flying anymore but he is landed (also integrated on the picture so he stick to the moutain with the responsivness).
In night mode, the clickable-points for both, character and eagle, do not work anymore. Instead, I created a text-box which appear when you "hover" them, with written "*zzzZZZ*" so it looks like both of them are sleeping and make the viewer know that they are unable to interact because of the night mode (UX).

The entire landing page is "overflow-y=hidden" so we cannot scroll down or up, the image is mostly adapting itself (responsivness). But we can still scroll to the X bar (horizontal) if the page is smaller (like phones or half desktop page) and the eagles, clouds, clickable-points will fit to the web-page (responsiveness with "@media" in "main.css" ; and "main.js" for clickable-points).

For the eagle animated page, animated typography finally come! GSAP is used to create a transition appearance (on the "eagle.js"). The eagle itself use the same animation made in the landing page during day, same for the clouds, just the typography is following the eagle in the "translateY" animation so it sticks to the eagle while flying ("*FLYING*"), so it looks like the text just describe the eagle's movements.

And for the character animated page, animated typography comeback! GSAP is used with the "TEXT" animation. It is put on the ".html" and its own "eagle.js". The animation looks like it is made by a "typewritter", so it looks like the character is speaking, like a chat-box of a video game. To increase this feeling, I made an "mouthAnimation" so the character looks like he is speaking (made with the "opacity1/0" game, same as the eagle one, so the mouth appear and disappear, and with a js code to make the animation more natural (very short and randoms appearance), and a small "bodyAnimation" with "translateY" to looks like the character is breathing and made it more realistic). On the background, wind is replacing clouds with the same animation type.

Sometimes it is written "eagle-game", it is because at the beginning, I wanted to create a "flappy bird" game with the eagle, but after tries and tries, I finally change to create a simple animation where the eagle is flying in the air.