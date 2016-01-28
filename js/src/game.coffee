Game =
  shapes: ["heart","star","square","circle","rocket","hashtag"]
  randomShapesClass: ->
    "fa-" + Game.shapes[Math.floor(Math.random()*Game.shapes.length)]
  populateCellsWithShapes: ->
    $.each $(".cell i"), (i,ele) -> $(ele).addClass Game.randomShapesClass
  populateCellCoordinates: ->
    rowNo = 1
    colNo = 1
    $.each $("#board .row"), (i, row) ->
      colNo = 1
      $.each $(row).children('.cell'), (j, cell) ->
        cell.dataset.rowNo = rowNo
        cell.dataset.colNo = colNo
        colNo++
      rowNo++
    Game.rowsCount = rowNo
    Game.columnsCount = colNo
  checkMatches: ->
    console.log "checking matches"
  init: ->
    Game.rowsCount = 0
    Game.columnsCount = 0
    Game.populateCellsWithShapes()
    Game.populateCellCoordinates()
    Game.checkMatches()

$ ->
   Game.init()
