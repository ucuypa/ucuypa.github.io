$(document).ready(function() {
    var mic;

    function setup(){
        mic = new p5.AudioIn();
        mic.start();
    }

    function getInput(){
      var vol = mic.getLevel()
    }
    
    $(".candles").p(function() {
        
      $(".flame").animate({"opacity": 0}, "fast");
      $(".flame2").animate({"opacity": 0}, "fast");
      $(".flame3").animate({"opacity": 0}, "fast");
      $(".text").animate({"top": -90, "opacity": 1}, "fast");
    });
});
