let audioContext: AudioContext;

export const initAudioContext = () => {
    return new Promise<void>((resolve): void => {
        audioContext = new AudioContext();
        resolve();
    });
}

export const getAudioContext = (): AudioContext => audioContext;