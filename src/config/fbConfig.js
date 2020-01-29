import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

// Replace this with your own config details
var config = {
	apiKey: "AIzaSyCG5NwibdN554idju3-rIdCIWYqNU7MKIg",
	authDomain: "market-app-9039d.firebaseapp.com",
	databaseURL: "https://market-app-9039d.firebaseio.com",
	projectId: "market-app-9039d",
	storageBucket: "market-app-9039d.appspot.com",
	messagingSenderId: "715439075963",
	appId: "1:715439075963:web:220c977fd17279f74e28de",
	measurementId: "G-GSHJ59LE71"
};

firebase.initializeApp(config);

export default firebase;
