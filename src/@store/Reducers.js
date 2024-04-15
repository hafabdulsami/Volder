// reducers.js

const addHeroSection = (state, data) => {
  console.log(data);
  return {
    ...state,
    heroSection: data.heroSectionList,
    qualitiesList: data.qualitiesList,
    categoryList: data.categoryList,
    productList: data.productList
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
