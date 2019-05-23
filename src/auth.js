$(document).ready(function () {
  // $('[data-toggle="tooltip"]').tooltip()

  $('#sign-in-btn').click(function (event) {
      event.preventDefault();

      let email = $('#email-input').val();
      let password = $('#password-input').val();

      firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function (response) {
              window.location = './src/home.html' + response.user.uid;
          })

          .catch(function (error) {
              let errorCode = error.code;
              let errorMessage = error.message;
              alert('Ocorreu um erro, tente novamente.');
              console.log(errorCode,errorMessage);
          })
  });


  $('#sign-up-btn').click(function (event) {
      event.preventDefault();

      let email = $('#email-input-up').val();
      let password1 = $('#password-input-up').val();
      let password2 = $('#password-input-conf').val();
      let password = (password1 === password2) ? password1 : console.log("senhas não batem");

      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(function (response) {
            //   writeUserData(email, password, response.user.uid);
              window.location = 'home.html';
          })

          .catch(function (error) {
              let errorCode = error.code;
              let errorMessage = error.message;
              alert('Ocorreu um erro, tente novamente.');
              console.log(errorCode,errorMessage);
          })
  });


  $('#logout-btn').click(function() {
      firebase.auth().signOut().then(function() {
          window.location = 'index.html'
        }).catch(function(error) {
         alert('Ocorreu um erro, tente novamente.')
        });
  }) 

});