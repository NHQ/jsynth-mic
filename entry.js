var audioContext = window.AudioContext || webkitAudioContext
var master = new audioContext()
var mic = require('./')(master)

mic.on('node', function(node){
  console.log(node)
  node.connect(master.destination)

})

