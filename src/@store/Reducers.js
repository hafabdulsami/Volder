// reducers.js

const addHeroSection = (state, data) => {
  return {
    ...state,
    heroSection: data
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HERO_SECTION":
      return addHeroSection(state, action.payload);
    default:
      return state;
  }
};
