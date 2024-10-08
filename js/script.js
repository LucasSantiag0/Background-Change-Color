// Here i'm defining the "X" as a variable that will be running through the array

var x = 0;



function changeColors() {
    var colors = ["red", "blue", "orange", "yellow", "green", "purple"];

    document.getElementsByTagName("body")[0].style.background = colors[x++];

    if (x > colors.length - 1)
        index = 0;
}