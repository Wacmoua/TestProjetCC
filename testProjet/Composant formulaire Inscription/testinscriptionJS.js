// Récupérer les éléments du DOM
let particulierForm = document.getElementById('particulier-form');
let entrepriseForm = document.getElementById('entreprise-form');
let particulierBtn2 = document.getElementById('particulierBtn2');
let entrepriseBtn = document.getElementById('entrepriseBtn');


 entrepriseForm.style.display = 'none';


particulierBtn2.addEventListener('click', function(){
    
 particulierForm.style.display = 'flex';
 entrepriseForm.style.display = 'none';
});


entrepriseBtn.addEventListener('click', function(){
    
  particulierForm.style.display = 'none';
  entrepriseForm.style.display = 'flex';
});

