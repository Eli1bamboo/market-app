import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Dashboard = (props) => {
	const { data } = props;
	const greeting = 'Hello Function Component!';

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
)(Dashboard);
