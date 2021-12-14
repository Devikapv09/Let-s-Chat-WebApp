const firebaseConfig = {
    apiKey: "AIzaSyCmnWee8qDDLXZhU9fxr29IOkaji_dJ-hM",
    authDomain: "let-s-chat-7edde.firebaseapp.com",
    projectId: "let-s-chat-7edde",
    storageBucket: "let-s-chat-7edde.appspot.com",
    messagingSenderId: "106270954912",
    appId: "1:106270954912:web:e94f475387ab8c8ecb00c5"
  };

  
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
