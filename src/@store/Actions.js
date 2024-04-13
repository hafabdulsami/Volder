// actions.js
// export const SET_HERO_SECTION = "SET_HERO_SECTION";

// export const setHeroSection = data => ({
//   type: SET_HERO_SECTION,
//   payload: data
// });

export const setHeroSection = (data, dispatch) => {
  dispatch({
    type: "SET_HERO_SECTION",
    payload: data
  });
};
