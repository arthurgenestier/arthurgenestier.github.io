function addCheck() {
    var cardCheck = document.getElementById("firstCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-first");
    lineCheck.classList.add("block");

    tc_events_20(this,'load',{'page':'salon','page_chapter1':'','page_chapter2':'','page_chapter3':''});

}

function addCheck2() {
    var cardCheck = document.getElementById("secondCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-second");
    lineCheck.classList.add("block");

    tc_events_20(this,'load',{'page':'sport','page_chapter1':'','page_chapter2':'','page_chapter3':''});
}

function addCheck3() {
    var cardCheck = document.getElementById("thirdCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-third");
    lineCheck.classList.add("block");

    tc_events_20(this,'load',{'page':'salle_de_bain','page_chapter1':'','page_chapter2':'','page_chapter3':''});

}

function addCheck4() {
    var cardCheck = document.getElementById("fourthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-fourth");
    lineCheck.classList.add("block");

    tc_events_20(this,'load',{'page':'jardin','page_chapter1':'','page_chapter2':'','page_chapter3':''});

}

function addCheck5() {
    var cardCheck = document.getElementById("fifthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-fifth");
    lineCheck.classList.add("block");

    tc_events_20(this,'load',{'page':'social','page_chapter1':'','page_chapter2':'','page_chapter3':''});

}

function addCheck6() {
    var cardCheck = document.getElementById("sixthCard");
    cardCheck.classList.add("check");
    var line = document.getElementById("line");
    line.classList.add("flex");
    var lineCheck = document.getElementById("check-icon-sixth");
    lineCheck.classList.add("block");

    tc_events_20(this,'load',{'page':'transport','page_chapter1':'','page_chapter2':'','page_chapter3':''});
}

function ficheConseils() {
    tc_events_20(this, 'load', { 'page': 'nos_fiches_conseils_prevention', 'page_chapter1': '', 'page_chapter2': '', 'page_chapter3': '' });
}

function checklistAntichute() {
    tc_events_20(this,'load',{'page':'check_liste_anti_chute','page_chapter1':'','page_chapter2':'','page_chapter3':''});
}

function demandeAvis() {
    tc_events_20(this,'load',{'page':'demande','page_chapter1':'avis','page_chapter2':'','page_chapter3':''});
}
//onclick="questionnaire()"
function questionnaire() {
    tc_events_20(this,'load',{'page':'questionnaire','page_chapter1':'avis','page_chapter2':'','page_chapter3':''})
}

function merci() {
    tc_events_20(this, 'load', { 'page': 'merci', 'page_chapter1': 'avis', 'page_chapter2': '', 'page_chapter3': '' })
}
//onclick="accompagne()"
function accompagne() {
    tc_events_20(this, 'load', { 'page': 'le_credit_agricole_vous_accompagne', 'page_chapter1': '', 'page_chapter2': '', 'page_chapter3': '' })
}
//onclick="acceuil()"
function acceuil() {
    tc_events_20(this, 'click', { 'evt_click_name': 'accueil' });
    tc_events_20(this, 'click', { 'evt_click_name': 'logo_credit_agricole' })

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