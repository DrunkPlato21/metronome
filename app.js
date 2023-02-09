let bpm = 120;
let isPlaying = false;
let intervalId;

let toggleButton = document.querySelector('.start-stop')
let decreaseButton = document.querySelector('.decrease-bpm')
let increaseButton = document.querySelector('.increase-bpm')

toggleButton.addEventListener('click', toggleMetronome)
decreaseButton.addEventListener('click', decreaseBPM)
increaseButton.addEventListener('click', increaseBPM)


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
    console.log('test')
    const sound = new Audio("audio/click.mp3");
    sound.play();
  }

  function updateBPMDisplay() {
    document.querySelector(".bpm-value").innerHTML = bpm;
  }

