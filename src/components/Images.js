import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

const Images = props => {
  this.props.images.map((image, i) => (
    <div key={i} className="fadein">
      <div
        onClick={() => props.removeImage(image.public_id)}
        className="delete"
      >
        <Icon icon="delete" />
      </div>
      <img src={image.secure_url} alt="" />
    </div>
  ));

  const content = () => {
    switch (true) {
      case this.props.images.length > 0:
        return (
          <Images
            images={images}
            removeImage={this.removeImage}
            onError={this.onError}
          />
        );
      default:
        return <Buttons onChange={this.onChange} />;
    }
  };

  return <div>{content()}</div>;
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Images);
