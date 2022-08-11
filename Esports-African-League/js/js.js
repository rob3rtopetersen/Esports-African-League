const firebaseConfig = {
  apiKey: "AIzaSyDPPfXeY05AqtpneUeW_BhA9qSPNQYJmkA",
  authDomain: "african-esports-league-f9a86.firebaseapp.com",
  databaseURL: "https://african-esports-league-f9a86-default-rtdb.firebaseio.com",
  projectId: "african-esports-league-f9a86",
  storageBucket: "african-esports-league-f9a86.appspot.com",
  messagingSenderId: "783585110701",
  appId: "1:783585110701:web:128d046c2eddf8e353f424"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//database reference
const contactFormDB = firebase.database().ref("contactForm");

document.getElementById("cntform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = getElementVal("fname");
  const email = getElementVal("mail");
  const msg = getElementVal("msg");

  saveMessages(name, email, msg)

  alert("Your message has been sent. Thank you for contacting us! :)")

  //reset form
  document.getElementById("cntform").reset();
}

const saveMessages = (name, email, msg) => {
  const newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    msg: msg,
  })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};