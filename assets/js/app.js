// REVISIONS
// Declarez une variable nommée "boucler" contenant true
<<<<<<< HEAD
var boucler = true;

// Declarez un tableau members contenant Aida67, lapie002, anneserrano, Jennysmille, nunkabuk, RCosson, kaonb-ax, FerEmilie, crazychouwi, KiluaZoldyc, patatobeur, Sam11360, elo062, hermeline, Biciclet,
var members = ['Aida67', 'lapie002', 'anneserrano', 'Jennysmille', 'nunkabuk', 'RCosson', 'kaonb-ax', 'FerEmilie', 'crazychouwi', 'KiluaZoldyc', 'patatobeur', 'Sam11360', 'elo062', 'hermeline', 'Biciclet'];
=======
//
//
// Declarez un tableau members contenant Aida67, lapie002, anneserrano, Jennysmille, nunkabuk, RCosson, kaonb-ax, FerEmilie, crazychouwi, KiluaZoldyc, patatobeur, Sam11360, elo062, hermeline, Biciclet,
//
>>>>>>> 26697ae42279b3c40455189642c0752911625fed
// SI la variable boucler vaut true ALORS
$("#check").click(function(){
  if (boucler === true) {
    for (var i = 0; i < members.length; i++) {
      switch (members[i]) {
        case "RCosson":
            console.log("affiche " + members[i]);
            $( ".test" ).append("<p>" + "affiche " + members[i] + "</p>");
          break;
        default:
            console.log(members[i]);
            $( ".test" ).append("<p>" + members[i] + "</p>");
          break;
      }
    }
  }
})
  // Bouclez sur le tableau que vous avez déclaré ci-dessus
  // Mettre un switch pour qu'au moment où la boucle se trouve sur votre pseudo cela ajoute "Affiche " devant votre pseudo dans la console et sur l'écran et par defaut seulement le pseudo pour les autres

// FIN REVISIONS
//
// COURS AJAX
// Faire une requete en ajax pour charger de façon asynchrone le html du fichier contenu.html

// COURS AJAX vers des API
  // AJAX Jquery .ajax() ou .getJSON()
  // Faites une requete vers l'API REST de Github pour récupérer les informations de votre compte et afficher le nombre de repositories que vous avez valeur de public_repos
// FIN COURS AJAX
