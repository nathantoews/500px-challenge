import React, { Component } from "react";
import "./styles/main.scss";
import { connect } from "react-redux";
import Gallery from "./components/gallery";
import { Route } from "react-router-dom";
import PhotoDetails from "./components/photo-details.js";
import { getPhotos } from "./store/actions";
import _ from "lodash";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

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
    return (
      <div className="">
        {/* Header Section  */}

        <header className="main-header">
          <Link to="/">
            <h1 className="logo">
              <img alt="main logo" src={logo} />
            </h1>
          </Link>
        </header>

        {/* Single Image Section */}

        <Route exact path="/" component={Gallery} />
        {!_.isEmpty(this.props.state) && (
          <Route path="/photo/:id/:name" render={props => <PhotoDetails {...props} />} />
        )}

        {/* Footer Section */}

        <footer className="main-footer">
          <h6 className="myname">Nathan Toews</h6>
        </footer>
      </div>
    );
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
