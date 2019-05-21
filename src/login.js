$(document).ready(function() {
    $('#signup-btn').click(function(event) {
        event.preventDefault();
        const email = $('#email-signup').val();
        const password = $('#password-signup').val();
        const passwordConfirm = $('#confirm-signup').val();
        const name = $('#name-signup').val();
        if (password === passwordConfirm) {
            firebase.auth().createUserWithEmailAndPassword(email, passwordConfirm)
                .then(function(result) {
                    window.location = './login.html';
                })
                .catch(function(error) {
                    $("#error-msg").html("<p>Senha e/ou usuário inválidos, tente novamente.</p>")
                };)
    };
  
    $('#signin-btn').click(function(event) {
        event.preventDefault();
        const userEmail = $('#email-login').val();
        const userPassword = $('#password-login').val();
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then(function(result) {
                window.location = './home.html'
            })
            .catch(function(error) {
                console.log(error.code, error.message);
            });
    });
    $('#signin-google-btn').click(function() {
        let provider = new firebase.auth.GoogleAuthProvider();
        signInSM(provider);
    });
    $('#signin-facebook-btn').click(function() {
        let provider = new firebase.auth.FacebookAuthProvider();
        signInSM(provider);
    });
});

// service cloud.firestore {
//     match /databases/{database}/documents {
//       match /{document=**} {
//         allow read, write: if request.auth.uid != null;
//       }
//     }
//   }
    