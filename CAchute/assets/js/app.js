function addCheck() {
    var cardCheck = document.getElementById("firstCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-first");
    lineCheck.classList.add("block");
} 
function addCheck2() {
    var cardCheck = document.getElementById("secondCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-second");
    lineCheck.classList.add("block");
}
function addCheck3() {
    var cardCheck = document.getElementById("thirdCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-third");
    lineCheck.classList.add("block");
} 
function addCheck4() {
    var cardCheck = document.getElementById("fourthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-fourth");
    lineCheck.classList.add("block");
} 
function addCheck5() {
    var cardCheck = document.getElementById("fifthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-fifth");
    lineCheck.classList.add("block");
} 
function addCheck6() {
    var cardCheck = document.getElementById("sixthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-sixth");
    lineCheck.classList.add("block");
}
function removeFlex() {
    var cross = document.getElementById("line");
    cross.classList.remove("flex");
}

function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, "mouseout", function (evt) {
    if (evt.toElement == null && evt.relatedTarget == null) {
    $(".exit").slideDown();
    }
});

$("a.close").click(function () {
    $(".exit").slideUp();
});

