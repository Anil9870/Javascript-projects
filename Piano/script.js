const painoKeys = document.querySelectorAll('.paino-keys .key');
voulumeControl = document.querySelector('.volume-slider input');

let allKeys = [];

let audio = new Audio('tunes/a.wav');

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();
}

painoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    //Handle keypress in UI
    key.addEventListener('click', () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
    if (allKeys.includes(e.key))
        playTune(e.key);
}
//Handle keypress in keyboard
document.addEventListener('keydown', pressedKey);

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

//Handle volume
voulumeControl.addEventListener('input', handleVolume);