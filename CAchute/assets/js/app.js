function addCheck() {
    var cardCheck = document.getElementById("firstCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-first");
    lineCheck.classList.add("block");
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : '',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'salon'
    };
}

function addCheck2() {
    var cardCheck = document.getElementById("secondCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-second");
    lineCheck.classList.add("block");
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : '',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'sport'
    };
}

function addCheck3() {
    var cardCheck = document.getElementById("thirdCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-third");
    lineCheck.classList.add("block");
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : '',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'salle_de_bain'
    };
}

function addCheck4() {
    var cardCheck = document.getElementById("fourthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-fourth");
    lineCheck.classList.add("block");
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : '',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'jardin'
    };
}

function addCheck5() {
    var cardCheck = document.getElementById("fifthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-fifth");
    lineCheck.classList.add("block");
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : '',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'social'
    };
}

function addCheck6() {
    var cardCheck = document.getElementById("sixthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-sixth");
    lineCheck.classList.add("block");
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : '',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'transport'
    };
}

function ficheConseils() {
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : '',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'nos_fiches_conseils_prevention'
    };
}

function checklistAntichute() {
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : '',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'check_liste_anti_chute'
    };
}

function demandeAvis() {
    tc_vars = {
        environnement : 'dev',
        page_chapter1 : 'avis',
        page_chapter2 : '',
        page_chapter3 : '',
        page : 'demande'
    };
}

function removeCheckLine() {
    var cross = document.getElementById("line");
    cross.classList.remove("flex");
}

function verifCheck() {
    if ($('#line > .container-line img:visible').length == 7) {
        var myModal = new bootstrap.Modal(document.getElementById('endModal'), {
            keyboard: false
          });
          myModal.show();
    };
    var cross = document.getElementById("line");
    cross.classList.remove("flex");
    //console.log($('#line > .container-line img:visible').length);
}

function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
    }
}

function pauseVideo() {
    $('.sample_video').trigger('pause');
}

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});