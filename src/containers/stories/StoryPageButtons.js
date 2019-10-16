import React from "react";
import composedAuthHOC from "../../HOC/AuthHOC";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StoryPageButtons = props => {
  return (
    <>
      <Button as={Link} to="/tome/story_notes" color="brown" content="Notes" />
      <Button
        as={Link}
        to="/tome/characters"
        color="brown"
        content="Characters"
      />
      <Button
        as={Link}
        to="/tome/locations"
        color="brown"
        content="Locations"
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(composedAuthHOC(StoryPageButtons));