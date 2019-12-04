var timer, a = 0.00,
    b = 0.60, c = 0;
var speech, newspeech;

function start(e) {
    var listdata = e.document.getElementById("mylist")
    timer = setInterval(() => {
        if (parseInt(a) > 0.60 || parseInt(b) < 0) {
            c = 0, a = 0.00, b = 0.60
            alert("click start");
            stop(e)
        } else {
            a = a + 0.03
            b = b - 0.03
            c = c + 1.47

            document.getElementById("span1").innerHTML = b.toPrecision(2)
            document.getElementById("span").innerHTML = a.toPrecision(2)
            document.getElementById('heloo').value = c;
        }
    }, 3000);



    speech = e.webkitSpeechRecognition;
    newspeech = new speech();
    newspeech.lang = "en-US"

    newspeech.continuous = true
    //console.log(newspeech)
    newspeech.onresult = function (event) {
        //console.log(event)
        for (var i = 0; i < event.results.length; i++) {
            const speechToText = event.results[i][0].transcript;
            var colr=["orange","black","green","skyblue"];

          
                var mycolr=colr[Math.floor(Math.random() * colr.length)]
                listdata.style.color=mycolr
           
            listdata.innerHTML = speechToText
        }
    }

    newspeech.start();
}

function stop(v) {
    v.clearInterval(timer)
    newspeech.stop()
}