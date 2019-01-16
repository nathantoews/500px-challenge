import React, { Component } from "react";
import "./styles/main.scss";
import { connect } from "react-redux";
import Gallery from "./components/gallery";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PhotoDetails from "./components/photo-details.js";
import { getPhotos } from "./store/actions";
import _ from "lodash";

const mapStateToProps = state => {
  return {
    state: state.imageGallery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: value => dispatch(getPhotos(value))
  };
};

class AppComponent extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    console.log(process.env.REACT_APP_CONSUMER_KEY);
    return (
      <div className="row mt-5">
        <h1>500 px Demo</h1>
        <Route path="/gallery" component={Gallery} />
        {!_.isEmpty(this.props.state) && (
          <Route path="/photo/:id/:name" render={props => <PhotoDetails {...props} />} />
        )}
      </div>
    );
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
