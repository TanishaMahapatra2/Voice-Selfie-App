var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
   Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

Textbox.innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie...");
        speak();
    }
    

    
}

function speak() {

    var synthesis = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(webcam);

    setTimeout(function()
{
    take_snapshot();
    save();
}, 5000);
}

camera = document.getElementById("webcam");

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality : 90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
   
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}
