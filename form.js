$(function(){
  'use strict';

const email = document.getElementsByName('email')[0];
const formAlert = document.querySelector(".emailFormAlert");

 
$('.emailFormSubmit').click(function (event) {
event.preventDefault();


const isValid = validateEmailForm();

    if(isValid===true){

      const sendEmail = $.ajax({
        type: "POST",
        url: "sendMessage.php",
        dataType : 'json',
        data: {
          'email' : email.value,
        }
      });

      sendEmail.fail(function(error) {
        formAlert.innerHTML='Wystąpił błąd.'+error.responseText;
      });

      sendEmail.done(function(response){
        formAlert.innerHTML=response.text;
      });
    }
  });
  
  
  function validateEmailForm(){
      if(email.validity.valid===false){
        markWrongInput(email,"Podaj poprawny email!");     
      }
      else return true;
    
    }

    function markWrongInput(wrongElement,alert){
      formAlert.innerHTML=alert;
      wrongElement.classList.add('wrongInput');
      wrongElement.addEventListener("focus", function (){this.classList.remove('wrongInput')});
    }
});
