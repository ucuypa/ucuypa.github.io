let mic;
let threshold = 0.05; // Adjust this value to make it sensitive enough for blowing
let debounceTime = 500; // Time in milliseconds
let lastTriggerTime = 0;


function setup() {
  noCanvas(); // We don't need a canvas for this example

  // Create an AudioIn object
  mic = new p5.AudioIn();

  // Start the microphone input
  mic.start();
  
}

function touchStarted() {
  getAudioContext().resume();
}

function draw() {
  // Get the volume level (between 0 and 1)
  let vol = mic.getLevel();
  console.log(vol); // Log the volume level to the console for debugging
  let currentTime = millis();

  // Check if the volume exceeds the threshold and debounce time has passed
  if (vol > threshold && (currentTime - lastTriggerTime > debounceTime)) {
    triggerAnimation();
    lastTriggerTime = currentTime;
  }
}

function triggerAnimation() {
  $(".flame").animate({"opacity": 0}, "fast");
  $(".flame2").animate({"opacity": 0}, "fast");
  $(".flame3").animate({"opacity": 0}, "fast");
  $(".text").animate({"top": -90, "opacity": 1}, "fast");
}