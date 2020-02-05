import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Productos from "./Productos";

const Home = props => {
  const { data } = props;

  console.log(data);

  return (
    <div>
      <Navbar />

      <Carousel />

      <Card
        /* TODO: Ver forma de linkear a imagenes locales (en caso de ser necesario) */
        image="https://images.unsplash.com/photo-1573246332153-e6bc5e09107a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3734&q=80"
        title="Bolson de verduras chico"
        text="lorem ipsum dolor tu vieja"
        /* TODO: Agregar links aca y fixear los de Card.js */
        /* linkTo={} */
      />

      <Card
        image="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3072&q=80"
        title="Bolson de verduras grande"
        text="lorem ipsum dolor tu vieja pero mas grande"
        /* TODO: Agregar links aca y fixear los de Card.js */
        /* linkTo={} */
      />
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
