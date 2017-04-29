var art = document.getElementsByClassName("article-section ");
var out = document.getElementById("output-target ");
var guineaPig = document.getElementById("guinea-pig ");
var btnColor = document.getElementById("add-color ");
var btnLarge = document.getElementById("make-large ");
var btnBorder = document.getElementById("add-border ");
var btnRounding = document.getElementById("add-rounding ");

for (var i = 0; i < art.length; i++) {
    art[i].addEventListener("click", function() {
        out.innerHTML = this.innerHTML;
    })
}

var pageTitle = document.getElementById("page-title ");
console.log(pageTitle);
pageTitle.addEventListener("mouseover", function(event) {
    out.innerHTML = "You moved your mouse over the header";
})
pageTitle.addEventListener("mouseout", function(event) {
    out.innerHTML = "You left me!!";
})

var keyPress = document.getElementById("keypress-input ");
keyPress.addEventListener("keypress-input ", function() {
    out.innerHTML = keyPress.value;
})

btnColor.addEventListener("click", function() {
    guineaPig.style.color = "blue";
})
btnLarge.addEventListener("click", function() {
    guineaPig.style.fontSize = "xx-large";
})
btnBorder.addEventListener("click", function() {
    guineaPig.style.border = "1px solid black";
})
btnRounding.addEventListener("click", function() {
    guineaPig.style.borderRadius = "10px";
})
