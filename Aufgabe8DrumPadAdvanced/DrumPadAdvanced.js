//Button Loads
window.addEventListener("load", function () {
    document.querySelector("#Kick").addEventListener("click", function () { playSample("Kick"); });
    document.querySelector("#Snare").addEventListener("click", function () { playSample("Snare"); });
    document.querySelector("#HiHat").addEventListener("click", function () { playSample("HiHat"); });
    document.querySelector("#C").addEventListener("click", function () { playSample("C"); });
    document.querySelector("#F").addEventListener("click", function () { playSample("F"); });
    document.querySelector("#G").addEventListener("click", function () { playSample("G"); });
    document.querySelector("#A").addEventListener("click", function () { playSample("A"); });
    document.querySelector("#Laugh1").addEventListener("click", function () { playSample("Laugh1"); });
    document.querySelector("#Laugh2").addEventListener("click", function () { playSample("Laugh2"); });
    document.querySelector("#PlayButtonPlay").addEventListener("click", PlayBeat);
    document.querySelector("#RecordButton").addEventListener("click", RecordABeat);
    document.querySelector("#DeleteButton").addEventListener("click", DeleteTheBeat);
    //play instruments separately
    var Beat = ["kick", "snare", "kick", "hihat",];
    var record = false;
    function playSample(mp3) {
        var sound = new Audio("assets/" + mp3 + ".mp3");
        sound.play();
        if (record == true) {
            Beat.push(mp3);
        }
    }
    //play Beat
    var BeatSpeed;
    var index = 0;
    function PlayBeat() {
        //Wechsel des Icons zu Pause, im Falle es wird das Play Button Icon angezeigt + Intervall des Beats auf 250 / Beat wird gestartet
        if (document.getElementById("PlayButtonPlay").classList.contains("fa-play")) {
            document.getElementById("PlayButtonPlay").classList.remove("fa-play");
            document.getElementById("PlayButtonPlay").classList.add("fa-pause");
            BeatSpeed = setInterval(DrumBeat, 250);
            record = false;
        }
        //Wechsel des Icons zu Play, im Falle es wird nicht das Play Button Icon angezeigt + Intervall wird gecleared / Beat wird gestoppt
        else {
            document.getElementById("PlayButtonPlay").classList.remove("fa-pause");
            document.getElementById("PlayButtonPlay").classList.add("fa-play");
            clearInterval(BeatSpeed);
        }
    }
    //Beat soll sich wiederholen, index wird bei >3 (3 ist HiHat) wieder auf null gesetzt (auf Kick)
    function DrumBeat() {
        playSample(Beat[index]);
        index += 1;
        console.log(Beat[index]);
        if (index > 3)
            index = 0;
    }
    //Beat wird aufgenommen
    function RecordABeat() {
        record = true;
    }
    //Beat wird gelöscht
    function DeleteTheBeat() {
        Beat.length = 0;
    }
});
//# sourceMappingURL=DrumPadAdvanced.js.map