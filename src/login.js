// $(document).ready(function() {
//     $('#signup-btn').click(function(event) {
//         event.preventDefault();
//         const email = $('#email-input').val();
//         const password = $('#password-input').val();
//         // const passwordConfirm = $('#password-input').val();
//         const name = $('#name-input').val();
//         // const age = $('#age-input').val();
//         // const gender = $('#gender-input').val();
//         if (password === passwordConfirm) {
//             firebase.auth().createUserWithEmailAndPassword(email, passwordConfirm)
//                 .then(function(result) {
//                     writeUserData(result.user.uid, name, age, gender);
//                     window.location = './initial.html';
//                 })
//                 .catch(function(error) {
//                     $('#help').html(error.message);
//                     console.log(error.code, error.message);
//                 });
//         }
//     });

$(document).ready(() => {
    const email = $('#email-login').val();
    const pass = $('#password-login').val();
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(() => {
            // updateProfile();
            verifyEmail();
        })
        .then(() => {
            window.location = "home.html";
        })
        .catch(function (error) {
            let errorCode = error.code;
        })
}
)

function verifyEmail() {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification()
        .catch(function (error) {
            let errorCode = error.code;
            alert("Erro de Cadastro");
            // $(".error-up").html("<p>Utilize um e-mail válido para se registrar.</p>");
        });
};

//   function updateProfile() {
//     let name = $('#sign-up-name').val();
//     const user = firebase.auth().currentUser;
//     user.updateProfile({
//       displayName: name
//     })
//   }

function cleanInputs() {
    $('.cleaning')[0].reset();
};




$('#signin-btn').click(function (event) {
    event.preventDefault();
    const userEmail = $('#email-login').val();
    const userPassword = $('#password-login').val();
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then(function (result) {
            window.location = ' ' + result.user.uid;
        })
        .catch(function (error) {
            console.log(error.code, error.message);
        });
});
$('#signin-google-btn').click(function () {
    let provider = new firebase.auth.GoogleAuthProvider();
    signInSM(provider);
});
$('#signin-facebook-btn').click(function () {
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