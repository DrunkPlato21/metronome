let bpm = 120;
let isPlaying = false;
let intervalId;
let volume = 0.5;

let toggleButton = document.querySelector('.start-stop')
let decreaseButton = document.querySelector('.decrease-bpm')
let increaseButton = document.querySelector('.increase-bpm')

const editableText = document.querySelector('.bpm-value')

editableText.addEventListener("click", function(e) {

  editableText.contentEditable = true;
  editableText.focus()
  
});

editableText.addEventListener("blur", function() {
  
  editableText.contentEditable = false;
 

  // Validate the input
  const bpmInput = Number(editableText.textContent);
  if (bpmInput >= 40 && bpmInput <= 218) {
    // Save the changes made by the user
    bpm = bpmInput;
    bpmSlider.value = bpm
  } else {
    // Reset the value if the input is invalid
    editableText.textContent = bpm;
  }

  if(isPlaying){       

    stopMetronome()
    startMetronome()
    
}

});




editableText.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    //unfocuses the element
    document.activeElement.blur();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === " ") {
    document.activeElement.blur();
    toggleMetronome();
  }
});


let bpmSlider = document.getElementById("bpm-slider");
bpmSlider.value = bpm;
bpmSlider.addEventListener("input", function() {
  bpm = Number(bpmSlider.value);
  updateBPMDisplay();
  if(isPlaying){       

    stopMetronome()
    startMetronome()
    
}
});


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
    light.style.backgroundColor = "#2980b9";
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

    if(bpm < 218){

        bpm += 1;
        bpmSlider.value = bpm;

        updateBPMDisplay();

        if(isPlaying){       

            stopMetronome()
            startMetronome()
            
        }

    }
    console.log(bpm)

  }

  function decreaseBPM() {

    if(bpm > 40){

        bpm -= 1;
        bpmSlider.value = bpm;

        updateBPMDisplay();


        if(isPlaying){       

            stopMetronome()
            startMetronome()

        }
    }

  }
  function playSound() {
    const sound = new Audio("audio/click.mp3");
    sound.volume = volume;
    toggleLight();
    sound.play();
  }

  function updateBPMDisplay() {
    document.querySelector(".bpm-value").innerHTML = bpm;
  }


let volumeSlider = document.getElementById("volume-control");
volumeSlider.min = 0;
volumeSlider.max = 1;
volumeSlider.step = 0.01;
volumeSlider.value = volume;

volumeSlider.addEventListener("input", function() {


  volume = Number(volumeSlider.value);
  console.log(volume)


});
