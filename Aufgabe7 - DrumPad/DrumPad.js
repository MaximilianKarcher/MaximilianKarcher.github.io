//Button Loads
window.addEventListener("load", function () {
    document.querySelector("#Kick").addEventListener("click", function () {
        playSample("Kick");
    });
    document.querySelector("#Snare").addEventListener("click", function () {
        playSample("Snare");
    });
    document.querySelector("#HiHat").addEventListener("click", function () {
        playSample("HiHat");
    });
    document.querySelector("#C").addEventListener("click", function () {
        playSample("C");
    });
    document.querySelector("#F").addEventListener("click", function () {
        playSample("F");
    });
    document.querySelector("#G").addEventListener("click", function () {
        playSample("G");
    });
    document.querySelector("#A").addEventListener("click", function () {
        playSample("A");
    });
    document.querySelector("#Laugh1").addEventListener("click", function () {
        playSample("Laugh1");
    });
    document.querySelector("#Laugh2").addEventListener("click", function () {
        playSample("Laugh2");
    });
    document.querySelector("#PlayButtonPlay").addEventListener("click", PlayBeat);
});
//PlayInstruments
function playSample(sound) {
    if (sound == "Kick") {
        var sound1 = new Audio('kick.mp3');
        sound1.play();
    }
    else if (sound == "Snare") {
        var sound2 = new Audio('snare.mp3');
        sound2.play();
    }
    else if (sound == "HiHat") {
        var sound3 = new Audio('hihat.mp3');
        sound3.play();
    }
    else if (sound == "C") {
        var sound3 = new Audio('C.mp3');
        sound3.play();
    }
    else if (sound == "F") {
        var sound3 = new Audio('F.mp3');
        sound3.play();
    }
    else if (sound == "G") {
        var sound3 = new Audio('G.mp3');
        sound3.play();
    }
    else if (sound == "A") {
        var sound3 = new Audio('A.mp3');
        sound3.play();
    }
    else if (sound == "Laugh1") {
        var sound3 = new Audio('laugh-1.mp3');
        sound3.play();
    }
    else if (sound == "Laugh2") {
        var sound3 = new Audio('laugh-2.mp3');
        sound3.play();
    }
}
//Play Beat
function PlayBeat() {
    var Kick = setInterval(DrumBeat, 250);
    var index = 0;
    var Beat = ["kick.mp3", "snare.mp3", "kick.mp3", "hihat.mp3",];
    function DrumBeat() {
        var sequence = new Audio(Beat[index]);
        sequence.play();
        index += 1;
        if (index > 3)
            index = 0;
        console.log(Beat[index]);
    }
    ;
}
;
//# sourceMappingURL=DrumPad.js.map