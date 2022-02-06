function opensesame() {
    var s = document.getElementById('enterSite').style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.05)<0?s.display="none":setTimeout(fade,3)})();
    
    
    var audioElem = document.getElementById("audio");
    var videoElem = document.getElementById('bg-video');
    audioElem.play();
    videoElem.play();
    startTime()
    }

    window.oncontextmenu = function() {return false;}
    if (typeof(Storage) !== undefined) {
        var cancer = new Array();
        cancer[0]  = '<p style="text-align:center;font-size:24px">get good nn dog</p>';
        cancer[1]  = '<p style="text-align:center;font-size:24px">ur a moms mistake</p>';
        cancer[2]  = '<p style="text-align:center;font-size:24px">welcome to hell</p>';
        cancer[3]  = '<p style="text-align:center;font-size:24px">ur father bought a broken condom</p>';
        cancer[4]  = '<p style="text-align:center;font-size:24px">ur still a virgin to this day</p>';
        cancer[5]  = '<p style="text-align:center;font-size:24px">get good, be a femboy</p>'
        cancer[6]  = '<p style="text-align:center;font-size:24px">404 iq not found</p>';
        cancer[7]  = '<p style="text-align:center;font-size:24px">halt die fresse</p>';
        cancer[8]  = '<p style="text-align:center;font-size:24px">1</p>';
        cancer[9]  = '<p style="text-align:center;font-size:24px">skill issue, get good</p>';
        cancer[10] = '<p style="text-align:center;font-size:24px">uid issue</p>';
        cancer[11] = '<p style="text-align:center;font-size:24px">nevershoot.cc</p>';
        cancer[12] = '<p style="text-align:center;font-size:24px">onetap update coming 2024</p>';
        if (!localStorage.quote) {
            localStorage.quote = 0;
        } else {
            localStorage.quote = Math.floor(Math.random() * 13);
        }
        
        var entersite;
        entersite = '<p style="text-align:center">click to continue</p>';
        
        document.getElementById("cancer").innerHTML = cancer[localStorage.quote] + entersite;
    } else {
}

// CRY animated

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = ["$ $ $ $", "S $ $ $", "S W $ $", "S W A $", "S W A G", "$ W A G", "$ $ A G", "$ $ $ G", "$ $ $ $"];


function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

function myFunction() {
    var discord = "SwagJesus#0001"
      navigator.clipboard.writeText(discord);
  
    alert(discord + " copied to clipboard.");
  }

var audio = document.getElementById("audio");
  audio.volume = 0.05;