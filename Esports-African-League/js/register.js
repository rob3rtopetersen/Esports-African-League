// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPPfXeY05AqtpneUeW_BhA9qSPNQYJmkA",
    authDomain: "african-esports-league-f9a86.firebaseapp.com",
    databaseURL: "https://african-esports-league-f9a86-default-rtdb.firebaseio.com",
    projectId: "african-esports-league-f9a86",
    storageBucket: "african-esports-league-f9a86.appspot.com",
    messagingSenderId: "783585110701",
    appId: "1:783585110701:web:128d046c2eddf8e353f424"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// reference db

function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}



function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));




}


function signOut() {

    auth.signOut();
    alert("Signed Out");

}



auth.onAuthStateChanged(function (user) {

    if (user) {

        var email = user.email;
        alert("Active User " + email);

        //Take user to a different or home page

        //is signed in

    } else {

        alert("No Active User");
        //no user is signed in
    }



});