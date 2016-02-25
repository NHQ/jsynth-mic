var gum = require('./getUserMedia')
var MIC = null
var STREAM = null

module.exports = function(master, cb){
  var mic = MIC || gum({audio:true, video:false})
  if(mic && STREAM){
    setTimeout(function(){
      var node = master.createMediaStreamSource(STREAM)
      var gain = master.createGain()
      gain.channelCount = 1
      gain.channelCountMode = 'explicit'
      gain. channelInterpretation = 'speakers'
      node.connect(gain)
      if(cb) cb(null, gain)
      else mic.emit('node', gain)
    },0)
    return mic
  }
  else{
    mic.on('stream', function(stream){
      STREAM = stream
      var node = master.createMediaStreamSource(stream)
      var gain = master.createGain()
      gain.channelCount = 1
      gain.channelCountMode = 'explicit'
      gain. channelInterpretation = 'speakers'
      node.connect(gain)
      if(cb) cb(null, gain)
      else mic.emit('node', gain)
    })
    MIC = mic
    //LINE = gain
    return mic
  }
}
