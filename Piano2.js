function whichNote(keyPressCount) {
    const piano = [ "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
    return piano[(keyPressCount - 1) % 88 % 12]
}
