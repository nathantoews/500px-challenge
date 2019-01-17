import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getSinglePhoto } from "../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    getSinglePhoto: value => dispatch(getSinglePhoto(value))
  };
};

const mapStateToProps = state => {
  return {
    photodetails: state.imageGallery.photos,
    largephoto: state.singleImage
  };
};

class PhotoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.photodetails.filter(info => info.id == this.props.match.params.id)[0]
    };
  }
  componentDidMount() {
    this.props.getSinglePhoto(this.state.details.id);
  }
  render() {
    return (
      <article className="photo-details">
        {!_.isEmpty(this.props.largephoto) && (
          <div
            className="photo-details__image"
            style={{ backgroundImage: `url(${this.props.largephoto.photo.image_url})` }}
          />
        )}
        <section className="photo-details__info">
          <h3 className="title">{this.state.details.name}</h3>
          {!_.isEmpty(this.state.details.camera) && (
            <section className="photo-details__camera">
              <h3>Photo Details</h3>
              <ul>
                <li>{this.state.details.camera}</li>
                <li>{this.state.details.lens}</li>
              </ul>
            </section>
          )}

          <p className="desc" dangerouslySetInnerHTML={{ __html: this.state.details.description }} />
        </section>

        <section className="photo-details__user">
          <div className="user-image" style={{ backgroundImage: `url(${this.state.details.user.userpic_url})` }} />
          <ul>
            <li>{this.state.details.user.fullname}</li>
            <li>{this.state.details.user.city}</li>
            <li>{this.state.details.user.country}</li>
          </ul>
        </section>
      </article>
    );
  }
}

const FullPhoto = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoInfo);

export default FullPhoto;
