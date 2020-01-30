import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Login = (props) => {
	const { data } = props;
	const greeting = 'Hello Login!';

	console.log(data);

	return <p>{greeting}</p>;
};

const mapStateToProps = (state) => {
	const data = state.firestore.data;

	return {
		data
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{
			collection: 'test'
		}
	])
)(Login);
