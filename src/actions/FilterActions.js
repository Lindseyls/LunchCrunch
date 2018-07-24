export const setFilterTime = (time) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_FILTER_TIME',
      payload: time
    });
  }
};
