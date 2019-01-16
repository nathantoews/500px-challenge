import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

const mapStateToProps = state => {
  return {
    photodetails: state.imageGallery.photos
  };
};

class PhotoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.photodetails.filter(info => info.id == this.props.match.params.id)[0]
    };
  }
  render() {
    return (
      <div>
        <article>
          <h3 className="title">{this.state.details.name}</h3>
          <p className="desc" dangerouslySetInnerHTML={{ __html: this.state.details.description }} />
        </article>
      </div>
    );
  }
}

const FullPhoto = connect(mapStateToProps)(PhotoInfo);

export default FullPhoto;
