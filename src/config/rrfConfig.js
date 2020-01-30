import { createFirestoreInstance } from 'redux-firestore';
import firebase from './fbConfig';
import { store } from './storeConfig';

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
	attachAuthIsReady: true,
	customAuthParameters: {
		google: {
			prompt: 'select_account'
		}
	}
};

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance // <- needed if using firestore
};
