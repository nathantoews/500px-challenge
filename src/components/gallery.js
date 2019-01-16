import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../store/actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Photo from "./photo.js";

import _ from "lodash";

/* ===============
Componentn Imports
=============== */

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: value => dispatch(getPhotos(value))
  };
};

const mapStateToProps = state => {
  return {
    photos: state.imageGallery.photos,
    page: state.imageGallery.current_page,
    feature: state.imageGallery.feature
  };
};

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      value: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    let _event = event.target;
    new Promise((resolve, reject) => {
      resolve(this.props.history.push("/gallery/" + event.target.value));
    }).then(() => {
      this.props.getPhotos({ feature: _event.value });
    });
  };
  pageChange = num => {
    this.props.getPhotos({ feature: this.props.feature, page: this.props.page + num });
  };

  render() {
    return (
      <section className="container">
        <h2>Select a Filter</h2>
        {/* prettier-ignore */}
        <select className="feature-select" onChange={this.handleChange}>
          <option className="feature" value="Popular">Popular</option>
          <option className="feature" value="highest_rated">Highest Rated</option>
          <option className="feature" value="upcoming">Upcoming</option>
          <option className="feature" value="editors">Editors</option>
          <option className="feature" value="fresh_today">Fresh Today</option>
          <option className="feature" value="fresh_yesterday">Fresh Yeseterday</option>
          <option className="feature" value="fresh_week">Fresh this Week</option> 
        </select>
        {!_.isEmpty(this.props.photos) && (
          <section className="gallery">
            <Route
              path="/gallery"
              render={props => {
                return this.props.photos.map(el => <Photo key={el.id} info={el} {...props} />);
              }}
            />
          </section>
        )}
        <section className="pagination">
          <div onClick={() => this.pageChange(-1)}>previous</div>
          <h5>{this.props.page}</h5>
          <div onClick={() => this.pageChange(1)}>next</div>
        </section>
      </section>
    );
  }
}
const Gallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallery);

export default withRouter(Gallery);
