let bpm = 120;
let isPlaying = false;
let intervalId;

let toggleButton = document.querySelector('.start-stop')
let decreaseButton = document.querySelector('.decrease-bpm')
let increaseButton = document.querySelector('.increase-bpm')

toggleButton.addEventListener('click', toggleMetronome)
decreaseButton.addEventListener('click', decreaseBPM)
increaseButton.addEventListener('click', increaseBPM)

let light = document.getElementById("light");
let isLightOn = false;

function toggleLight() {
  if (isLightOn) {
    light.style.backgroundColor = "red";
    isLightOn = false;
  } else {
    light.style.backgroundColor = "blue";
    isLightOn = true;
  }
}


function toggleMetronome() {
    if (isPlaying) {
      stopMetronome();
    } else {
      startMetronome();
    }

    toggleButton.classList.toggle('on')
  }

  function startMetronome() {

    isPlaying = true;
    intervalId = setInterval(playSound, 60000 / bpm);    

  }

  function stopMetronome() {
    isPlaying = false;
    clearInterval(intervalId);
  }

  function increaseBPM() {

    if(bpm < 200){

        bpm += 1;
        updateBPMDisplay();

        if(isPlaying){       

            stopMetronome()
            startMetronome()
            
        }

    }

  }

  function decreaseBPM() {

    if(bpm > 50){

        bpm -= 1;
        updateBPMDisplay();

        if(isPlaying){       

            stopMetronome()
            startMetronome()

        }
    }

  }
  function playSound() {
    const sound = new Audio("audio/click.mp3");
    toggleLight();
    sound.play();
  }

  function updateBPMDisplay() {
    document.querySelector(".bpm-value").innerHTML = bpm;
  }

