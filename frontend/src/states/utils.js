export default {
  updateObject: (oldState, updateState) => {
    return { ...oldState, ...updateState };
  },
};
