import gunRack from "./Sounds/The Kit Plug - Source (Drum Kit)/FX/SOURCE - FX - 006.wav"
import bass from "./Sounds/The Kit Plug - Source (Drum Kit)/808/SOURCE - 808 - 004.wav"
import kick from "./Sounds/The Kit Plug - Source (Drum Kit)/Kick/SOURCE - KICK - 006.wav"
import snare from "./Sounds/The Kit Plug - Source (Drum Kit)/Snare/SOURCE - SNARE - 005.wav"
import highHat from "./Sounds/The Kit Plug - Source (Drum Kit)/HH/SOURCE - HH - 001.wav"
import vox from "./Sounds/The Kit Plug - Source (Drum Kit)/Vox/SOURCE - VOX - 001.wav"
import clap from "./Sounds/The Kit Plug - Source (Drum Kit)/Clap/SOURCE - CLAP - 001.wav"
import cym from "./Sounds/The Kit Plug - Source (Drum Kit)/Cym/SOURCE - CYM - 001.wav"
import perc from "./Sounds/The Kit Plug - Source (Drum Kit)/Perc/SOURCE - PERC - 001.wav"

const kit = {
    q: {title: "gunRack", sound: gunRack},
    w: {title: "bass", sound: bass},
    e: {title: "vox", sound: vox},
    a: {title: "highHat", sound: highHat},
    s: {title: "clap", sound: clap},
    d: {title: "cym", sound: cym},
    z: {title: "kick", sound: kick},
    x: {title: "snare", sound: snare},
    c: {title: "perc", sound: perc},
}

export default kit