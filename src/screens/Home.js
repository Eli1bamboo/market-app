import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from '../components/About'
import Productos from "./Productos";

const Home = props => {
  const { data } = props;

  console.log(data);

  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
    </div>
  );
};

const mapStateToProps = state => {
  const data = state.firestore.data;

  return {
    data
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "test"
    }
  ])
)(Home);
