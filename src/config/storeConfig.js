import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers/rootReducer';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })))
);
