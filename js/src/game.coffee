Game =
shapes: ["heart","star","square","circle"]
randomShapesClass: ->
    "fa-" + Game.shapes[Math.floor(Math.random()*Game.shapes.length)]
init: ->
  $.each $(".cell i"), (i,ele) -> $(ele).addClass Game.randomShapesClass
$ ->
   Game.init()
