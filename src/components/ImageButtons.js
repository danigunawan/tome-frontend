import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";

const BASE_URL = "http://localhost:3000/";

class ImageButtons extends Component {
  onChange = e => {
    const files = Array.from(e.target.files);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`${BASE_URL}/${this.props.type}/image_upload`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(images => console.log(images));
    //   .then(images => {
    //     this.setState({
    //       uploading: false,
    //       images
    //     });
    //   });
  };

  render() {
    return (
      <>
        <div className="buttons fadein">
          <div className="button">
            <label htmlFor="single">
              <Icon icon="image" />
            </label>
            <input type="file" id="single" onChange={this.onChange} />
          </div>

          <div className="button">
            <label htmlFor="multi">
              <Icon icon="images" />
            </label>
            <input
              type="file"
              id="multi"
              onChange={this.props.onChange}
              multiple
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(ImageButtons);
