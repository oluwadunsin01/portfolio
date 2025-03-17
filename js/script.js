// Initialize Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" }
    },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

// Initialize Typed.js for animated typing effect
var typed = new Typed('#typed', {
  strings: [
    "Hi There! 👋🏻",
    "I'M DUNSIN",
    "A Computer Science student who's passionate about cloud servers and VoIP systems."
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1500,
  loop: true
});
