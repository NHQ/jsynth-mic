## jsynth-mic

A simple Web Audio API module for accessing the getUserMedia audio stream from a mic/line-in.  Returns an emitter, which.on('node') passes yours listener a Web Audio Node.  See the example. Currently, the opinion of this module is to mix the mic to mono.



```
npm install jsynth-mic
```

## the example

```js
var audioContext = window.AudioContext || webkitAudioContext
var master = new audioContext()

// call the module with the master audio context
var mic = require('./')(master)

// it returns an event emitter
mic.on('node', function(node){
//  console.log(node) // a gain node
  node.connect(master.destination)
})

```

## testing

you can run the example by browserifying entry.js, or using ```opa```

```
npm install -g opa watchify
opa -e entry
```

