 import * as firebase from "firebase";

 const firebaseConfig = {
  apiKey: "AIzaSyAczm-kkOILgXzow7uADsJYDpxUlXDPX2A",
  authDomain: "classtest-b3ec0.firebaseapp.com",
  databaseURL: "https://classtest-b3ec0-default-rtdb.firebaseio.com",
  projectId: "classtest-b3ec0",
  storageBucket: "classtest-b3ec0.appspot.com",
  messagingSenderId: "445625588210",
  appId: "1:445625588210:web:7459549a1b2f25e95d336b"
};

//initialize your database
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

  export default firebase.database()
 

  