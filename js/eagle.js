/* ----------------------------------------- */
/* TEXT-ANIMATION -------------------------- */
/* ----------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    // Enregistrer le plugin Text
    gsap.registerPlugin(TextPlugin);
    
    // Animation du texte
    var h1 = document.querySelector("h1");
    var letters = h1.textContent.split("");
    h1.textContent = "";
    var cluter = "";
    halfValue = Math.floor(letters.length/2)
    console.log(halfValue)
    letters.forEach(function(letter,idx){
        // console.log(letter,idx)
        if(idx<halfValue){
            cluter = cluter + `<span class="first">${letter}</span>`
        }
        else{
            cluter = cluter + `<span class="second">${letter}</span>`
        }
    })
    h1.innerHTML = cluter
    
    gsap.from("h1 .first",{
        duration: 0.6,
        delay: 0.5,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out",
        skewY: 7,
        stagger:0.3
    })
    gsap.from("h1 .second",{
        duration: 0.6,
        delay: 0.5,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out",
        skewY: 7,
        stagger:-0.3
    })
});


/* ----------------------------------------- */
/* RANDOM-SPEAKING CHARACTER --------------- */
/* ----------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const frame4 = document.querySelector('.frame4');
  
    function getRandomDelay(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function toggleVisibility() {
      if (frame4.style.visibility === 'visible') {
        frame4.style.visibility = 'hidden';
      } else {
        frame4.style.visibility = 'visible';
      }
      // Set a new random delay for the next toggle
      const delay = getRandomDelay(100, 500);
      setTimeout(toggleVisibility, delay);
    }
  
    // Initial visibility setup
    frame4.style.visibility = 'hidden';
  
    // Start the toggling with a random delay
    toggleVisibility();
  });

















  var tl = new TimelineMax({
    paused:true
  });
  // letter animation
  tl.fromTo(".anim-typewriter", 8, {
    width: "0",
  }, {
    width: "20.18em", /* same as CSS .line-1 width */
    ease:  SteppedEase.config(37)
  }, 0);
  // text cursor animation
  tl.fromTo(".anim-typewriter", 0.5, {
    "border-right-color": "rgba(255,255,255,0.75)"
  }, {
    "border-right-color": "rgba(255,255,255,0)",
    repeat: -1,
    ease:  SteppedEase.config(37)
  }, 0);
  
  tl.play();