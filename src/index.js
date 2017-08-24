const processReducer = (reducers, initState = {}) => (state = initState, action) => {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
};

export default processReducer;
