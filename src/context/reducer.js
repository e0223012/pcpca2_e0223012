const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ACTIVITIES":
        return { ...state, activities: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  