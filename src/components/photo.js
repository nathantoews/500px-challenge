import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

const mapStateToProps = state => {
  return {};
};

class SeriesInfo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <article>
        <div className="image" style={{ backgroundImage: `url(${this.props.info.image_url[0]})` }} />
        {/* <h3 className="title">{this.props.info.name}</h3>
        <p className="desc" dangerouslySetInnerHTML={{ __html: this.props.info.description }} /> */}
      </article>
    );
  }
}

const SingleSeries = connect(mapStateToProps)(SeriesInfo);

export default SingleSeries;
