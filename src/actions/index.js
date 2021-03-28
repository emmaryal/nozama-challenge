//action creator

export const selectDate = (date) => {
  //return an action
  return {
    type: "DATE_SELECTED",
    payload: date,
  };
};
