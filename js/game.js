var Game;

Game = {
  shapes: ["heart", "star", "square", "circle", "rocket", "car"],
  randomShapesClass: function() {
    return "fa-" + Game.shapes[Math.floor(Math.random() * Game.shapes.length)];
  },
  init: function() {
    return $.each($(".cell i"), function(i, ele) {
      return $(ele).addClass(Game.randomShapesClass);
    });
  }
};

$(function() {
  return Game.init();
});
