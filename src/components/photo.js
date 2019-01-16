import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {};
};

class Photo extends Component {
  imageDetails = () => {
    this.props.history.push(this.props.info.url);
  };
  render() {
    return (
      <article onClick={this.imageDetails} className="card">
        <div className="card__image" style={{ backgroundImage: `url(${this.props.info.image_url[0]})` }} />
        <div className="card__info">
          <h3 className="user">{this.props.info.user.fullname}</h3>
        </div>
      </article>
    );
  }
}

const SinglePhoto = connect(mapStateToProps)(Photo);

export default SinglePhoto;
