var gum = require('./getUserMedia')

module.exports = function(master){
  var mic = gum({audio:true, video:false})
  mic.on('stream', function(stream){
    var node = master.createMediaStreamSource(stream)
    var gain = master.createGain()
    gain.channelCount = 1
    gain.channelCountMode = 'explicit'
    gain. channelInterpretation = 'speakers'
    node.connect(gain)
    mic.emit('node', gain)
  })
  return mic
}
