
var couleur = document.getElementById('color');

const body = document.body


document.getElementById('btn').addEventListener ('click', function(){
    
    var col1 = getRandomRGB();
    var col2 = getRandomRGB();
    var col3 = getRandomRGB();
    var colorString = "rgb(" + col1 +","+ col2 +","+ col3+")";
    // rfb(val1,val2,val3)
    console.log(colorString)
    body.style.background = colorString;
    couleur.innerText = colorString;
    console.log(col1)
    console.log(col2)
    console.log(col3)
});


function getRandomRGB (){
    return Math.floor(Math.random() * 255);
}
