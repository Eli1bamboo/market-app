import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function Dashboard(props) {
    const { data } = props
    const greeting = 'Hello Function Component!';

    console.log(data);

    return <p>{greeting}</p>;
}

const mapStateToProps = (state) => {
    const data = state.firestore.data

    return {
        data
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'test'
        }
    ])
)(Dashboard)