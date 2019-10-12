const BASE_URL = "http://localhost:3000/";

export const setCharacters = characters => {
  return {
    type: "SET_CHARACTERS",
    payload: characters
  };
};

export const setStoryCharacters = characters => {
  return {
    type: "SET_STORY_CHARACTERS",
    payload: characters
  };
};

export const fetchCharacters = () => {

  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    console.log('in fetchCharacters fetching characters')
    return fetch(BASE_URL + "getcharacters", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: user })
    })
      .then(res => res.json())
      .then(characters => dispatch(setCharacters(characters)));
  };
};

export const fetchStoryCharacters = story => {
  console.log('in fetchStoryCharacters fetching characters for a story')

  let user = JSON.parse(localStorage.getItem("user"));

  return dispatch => {
    return fetch(BASE_URL + "getstorycharacters", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ 
        user: user, 
        story: story
      })
    })
      .then(res => res.json())
      .then(characters => dispatch(setStoryCharacters(characters)));
  };
}

export const currentCharacter = (character) =>
{
  console.log('set character')
  return {
    type: 'CURRENT_CHARACTER',
    payload: character
  }
}
