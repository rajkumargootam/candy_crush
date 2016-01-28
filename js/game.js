var Game;

Game = {
  shapes: ["heart", "star", "square", "circle", "rocket", "hashtag"],
  randomShapesClass: function() {
    return "fa-" + Game.shapes[Math.floor(Math.random() * Game.shapes.length)];
  },
  populateCellsWithShapes: function() {
    return $.each($(".cell i"), function(i, ele) {
      return $(ele).addClass(Game.randomShapesClass);
    });
  },
  populateCellCoordinates: function() {
    var colNo, rowNo;
    rowNo = 1;
    colNo = 1;
    $.each($("#board .row"), function(i, row) {
      colNo = 1;
      $.each($(row).children('.cell'), function(j, cell) {
        cell.dataset.rowNo = rowNo;
        cell.dataset.colNo = colNo;
        return colNo++;
      });
      return rowNo++;
    });
    Game.rowsCount = rowNo;
    return Game.columnsCount = colNo;
  },
  checkMatches: function() {
    return console.log("checking matches");
  },
  init: function() {
    Game.rowsCount = 0;
    Game.columnsCount = 0;
    Game.populateCellsWithShapes();
    Game.populateCellCoordinates();
    return Game.checkMatches();
  }
};

$(function() {
  return Game.init();
});
