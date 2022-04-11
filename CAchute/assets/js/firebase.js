const firebaseConfig = {
    apiKey: "AIzaSyCO53_1INNFc-oTD81GFDq6agT6jO_GsIg",
    authDomain: "ca-chute-senior.firebaseapp.com",
    databaseURL: "https://ca-chute-senior-default-rtdb.firebaseio.com",
    projectId: "ca-chute-senior",
    storageBucket: "ca-chute-senior.appspot.com",
    messagingSenderId: "207627346511",
    appId: "1:207627346511:web:a9c088a6559cfa101fc03a",
    measurementId: "G-8XH8BWB6GJ"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  // Reference messages collection
var db = firestore.collection("survey");

// Listen for form submit
let submitButton = document.getElementById('submit');

submitButton.addEventListener("click", (e)=>{
  e.preventDefault();

  // get values and verify if they're checked
   var XP0 = document.getElementById('XP0').checked;
   var XP1 = document.getElementById('XP1').checked;
   var XP2 = document.getElementById('XP2').checked;
   var XP3 = document.getElementById('XP3').checked;
   var XP4 = document.getElementById('XP4').checked;
   var XP5 = document.getElementById('XP5').checked;
   var XP6 = document.getElementById('XP6').checked;
   var XP7 = document.getElementById('XP7').checked;
   var XP8 = document.getElementById('XP8').checked;
   var XP9 = document.getElementById('XP9').checked;
   var XP10 = document.getElementById('XP10').checked;
   var useful_pasdutout = document.getElementById('useful_pasdutout').checked;
   var useful_plutotnon = document.getElementById('useful_plutotnon').checked;
   var useful_plutotoui = document.getElementById('useful_plutotoui').checked;
   var useful_toutafait = document.getElementById('useful-toutafait').checked;
   var vigilant_pasdutout = document.getElementById('vigilant_pasdutout').checked;
   var vigilant_plutotnon = document.getElementById('vigilant_plutotnon').checked;
   var vigilant_plutotoui = document.getElementById('vigilant_plutotoui').checked;
   var vigilant_toutafait = document.getElementById('vigilant_toutafait').checked;

  db.doc().set({
    // send a promise and log errors or success
    XP0: XP0,
    XP1: XP1,
    XP2: XP2,
    XP3: XP3,
    XP4: XP4,
    XP5: XP5,
    XP6: XP6,
    XP7: XP7,
    XP8: XP8,
    XP9: XP9,
    XP10: XP10,
    useful_pasdutout: useful_pasdutout,
    useful_plutotnon: useful_plutotnon,
    useful_plutotoui: useful_plutotoui,
    useful_toutafait: useful_toutafait,
    vigilant_pasdutout: vigilant_pasdutout,
    vigilant_plutotnon: vigilant_plutotnon,
    vigilant_plutotoui: vigilant_plutotoui,
    vigilant_toutafait: vigilant_toutafait
    
  }).then( () => {
    console.log("réponses envoyées");
  }).catch( (error) => {
    console.log(error);
  });
  // TODO : afficher une alerte "success" en CSS/JS à la place de ceci
  ///alert("Votre avis a bien été envoyé. Merci!")

  // Clear form after submit
  document.getElementById('contactForm').reset();

  // tagcommander variables
  window.tc_vars = {
            environnement : 'dev',
            page_chapter1 : 'avis',
            page_chapter2 : '',
            page_chapter3 : '',
            page : 'merci'
        };
});


