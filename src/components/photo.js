import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

const mapStateToProps = state => {
  return {};
};

class Photo extends Component {
  constructor(props) {
    super(props);
  }
  imageDetails = () => {
    this.props.history.push(this.props.info.url);
  };
  render() {
    return (
      <article onClick={this.imageDetails} className="card">
        <div className="card__image" style={{ backgroundImage: `url(${this.props.info.image_url[0]})` }} />
      </article>
    );
  }
}

const SinglePhoto = connect(mapStateToProps)(Photo);

export default SinglePhoto;
