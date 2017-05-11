
var context;

function getContext() {
  if (context) return context;
  
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
  } catch(e) {
    console.log('Web Audio API is not supported in the browser');
  }

  return context;
}

function loadSound(sound_name) {
  var defer = new $.Deferred;
  var request = new XMLHttpRequest();
  request.open('GET', sound_name, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    var context = getContext();
    context.decodeAudioData(request.response, function(buffer) {
      defer.resolve(buffer);
    }, function() {
      console.log('error');
    });
  }
  request.send();
  return defer.promise();
}

var sound = {};

loadSound('furudokei.mp3').then(function(buffer) {
  sound['furudokei'] = {};
  sound['furudokei'].buffer = buffer;
}, function() {
  console.log('load error')
});

loadSound('dog1.wav').then(function(buffer) {
  sound['dog1'] = {};
  sound['dog1'].buffer = buffer;
}, function() {
  console.log('load error')
});

var playing = false;

document.getElementById('bgm').addEventListener('click', function() {
  if (playing) {
    sound['furudokei'].source.stop(0);
  } else {
    var context = getContext();
    sound['furudokei'].source = context.createBufferSource();
    sound['furudokei'].source.buffer = sound['furudokei'].buffer;
    sound['furudokei'].source.connect(context.destination);
    sound['furudokei'].source.start(0);
  }
  playing = !playing;
});

document.getElementById('se').addEventListener('click', function() {
  if (sound['dog1'].source) sound['dog1'].source.stop(0);
  var context = getContext();
  sound['dog1'].source = context.createBufferSource();
  sound['dog1'].source.buffer = sound['dog1'].buffer;
  sound['dog1'].source.connect(context.destination);
  sound['dog1'].source.start(0);
});
