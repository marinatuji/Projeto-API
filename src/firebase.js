(document).ready(function() {
    $('#signup-btn').click(function(event) {
        event.preventDefault();
        const email = $('#email-input').val();
        const password = $('#password-input').val();
        const passwordConfirm = $('#password-input').val();
        const name = $('#name-input').val();
        // const age = $('#age-input').val();
        // const gender = $('#gender-input').val();
        if (password === passwordConfirm) {
            firebase.auth().createUserWithEmailAndPassword(email, passwordConfirm)
                .then(function(result) {
                    writeUserData(result.user.uid, name, age, gender);
                    window.location = './initial.html';
                })
                .catch(function(error) {
                    $('#help').html(error.message);
                    console.log(error.code, error.message);
                });
        }
    });
  
    $('#signin-btn').click(function(event) {
        event.preventDefault();
        const userEmail = $('#email-login').val();
        const userPassword = $('#password-login').val();
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then(function(result) {
                window.location = ' ' + result.user.uid;
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