import React from "react";
import StoriesButton from "../../components/navButtons/StoriesButton";
import CharactersButton from "../../components/navButtons/CharactersButton";
import LocationsButton from "../../components/navButtons/LocationsButton";
import WorldsButton from "../../components/navButtons/WorldsButton";

const CharacterNavMenu = () => {
  return (
    <>
      <WorldsButton />
      <StoriesButton />
      <CharactersButton />
      <LocationsButton />
    </>
  );
};

export default CharacterNavMenu;
