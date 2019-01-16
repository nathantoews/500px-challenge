import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos, getSeriesFull } from "../store/actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Photo from "./photo.js";

/* ===============
Componentn Imports
=============== */

// const mapDispatchToProps = {
//   addArticle: article => addArticle(article)
// };

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: value => dispatch(getPhotos(value))
  };
};

const mapStateToProps = state => {
  return {
    photos: state.imageGallery
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
  componentDidMount() {
    this.props.getPhotos();
  }
  handleChange = event => {
    let _event = event.target;
    new Promise((resolve, reject) => {
      resolve(this.props.history.push("/feature/" + event.target.value));
    }).then(() => {
      this.props.getPhotos(_event.value);
    });
  };
  render() {
    return (
      <section className="gallery-container">
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
        <ul className="gallery">
          {this.props.photos.map(el => (
            <Photo key={el.id} info={el} />
          ))}
        </ul>
      </section>
    );
  }
}
const Gallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallery);

export default withRouter(Gallery);
