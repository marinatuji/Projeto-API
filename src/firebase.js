(document).ready(function() {
    $('#sign-up-btn').click(function(event) {
        event.preventDefault();
        const email = $('#email-input').val();
        const password = $('#password-input').val();
        const passwordConfirm = $('#password-input').val();
        const name = $('#name-input').val();
        const age = $('#age-input').val();
        const gender = $('#gender-input').val();
        if (password === passwordConfirm) {
            firebase.auth().createUserWithEmailAndPassword(email, passwordConfirm)
                .then(function(result) {
                    writeUserData(result.user.uid, name, age, gender);
                    window.location = './views/initial.html';
                })
                .catch(function(error) {
                    $('#help').html(error.message);
                    console.log(error.code, error.message);
                });
        }
    });
  
    $('#sign-in-emailAndPassword-btn').click(function(event) {
        event.preventDefault();
        const userEmail = $('#emailInput').val();
        const userPassword = $('#passwordInput').val();
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then(function(result) {
                window.location = ' ' + result.user.uid;
            })
            .catch(function(error) {
                console.log(error.code, error.message);
            });
    });
    $('#sign-in-google-btn').click(function() {
        let provider = new firebase.auth.GoogleAuthProvider();
        signInSM(provider);
    });
    $('#sign-in-facebook-btn').click(function() {
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