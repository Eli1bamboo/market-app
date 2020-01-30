import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './config/storeConfig';
import { ReactReduxFirebaseProvider, isLoaded, isEmpty } from 'react-redux-firebase';
import { rrfProps } from './config/rrfConfig';
import Login from './screens/Login';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import PrivateRoute from './routes/PrivateRoute';

const AuthIsLoaded = ({ children }) => {
	const auth = useSelector((state) => state.firebase.auth);

	if (!isLoaded(auth)) return <div>splash screen...</div>;
	return children;
};

const App = () => {
	console.log(isEmpty, isLoaded);

	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<BrowserRouter>
					<AuthIsLoaded>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/login" component={Login} />
							<PrivateRoute path="/protected" component={Dashboard} />
							<Redirect to="/" />
						</Switch>
					</AuthIsLoaded>
				</BrowserRouter>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
};

export default App;
