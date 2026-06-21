class audio {
    constructor(parameters) {
        
    }
    // 1. Create and prepare an audio element
loadSound(url, loop = false, volume = 0.5) {
    let audio = new Audio(url);
    audio.loop = loop;
    audio.volume = volume;
    return audio; // Returns the audio object control block
}

// 2. Play a sound immediately (SFX or Music)
playSound(audioObject) {
    // Reset sound to start if it's already playing (crucial for rapid SFX like shooting)
    audioObject.currentTime = 0; 
    audioObject.play().catch(err => {
        console.warn("Audio playback blocked. Browsers require a user click/interaction before playing sound!", err);
    });
}

// 3. Stop a sound completely
stopSound(audioObject) {
    audioObject.pause();
    audioObject.currentTime = 0;
}
}
export {audio}
