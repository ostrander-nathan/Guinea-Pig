var art = document.getElementsByClassName("article-section");
var out = document.getElementById("output-target");
var guineaPig = document.getElementById("guinea-pig");
var btnColor = document.getElementById("add-color");
var btnLarge = document.getElementById("make-large");
var btnBorder = document.getElementById("add-border");
var btnRounding = document.getElementById("add-rounding");
var keyPress = document.getElementById("keypress-input");
var pageTitle = document.getElementById("page-title");
var mirror = document.getElementById("output-target");
// click for sec
for (var i = 0; i < art.length; i++){
	art[i].addEventListener("click", function(){
		out.innerHTML = this.innerHTML; 
	})
}
// change h1 mouseover
function changeText(text)
        {
            var display = document.getElementById('text-display');
            display.innerHTML = "";
            display.innerHTML = text;
        }
function changeback(text)
        {
            var display = document.getElementById('text-display');
            display.innerHTML = "";
            display.innerHTML = text;
        }
pageTitle.addEventListener("mouseover", function(event) {
	changeText('You moved your mouse over the header');
	
})
pageTitle.addEventListener("mouseout", function(event) {
	changeText('You left me!!');
	
})

// mirror 
var keyPress = document.getElementById("keypress-input");
keyPress.addEventListener("keypress", function(){
	out.innerHTML = keyPress.value;
})
// change styles
btnColor.addEventListener("click", function(){
	guineaPig.style.color = "blue";
})
btnLarge.addEventListener("click", function(){
	guineaPig.style.fontSize = "xx-large";
})
btnBorder.addEventListener("click", function(){
	guineaPig.style.border = "1px solid black";
})
btnRounding.addEventListener("click", function(){
	guineaPig.style.borderRadius = "10px";
})