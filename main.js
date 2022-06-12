var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nB-rpXy3C/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "https://img.freepik.com/free-vector/cute-dog-cartoon-dog-clipart-vector-illustration_160901-2890.jpg?w=740";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://img.freepik.com/free-vector/cute-cat-cartoon-sitting_194935-99.jpg?w=740";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://image.shutterstock.com/image-vector/cartoon-lion-roaring-260nw-688771690.jpg";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBV6DQuWXCBr1_Cb_DFCRaK2PBNk6-lU_gfw&usqp=CAU";
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}