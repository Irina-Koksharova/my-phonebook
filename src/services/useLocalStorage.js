const getState = () => {
  try {
    return JSON.parse(localStorage.getItem('contacts'))
      ? JSON.parse(localStorage.getItem('contacts'))
      : [];
  } catch (error) {
    return undefined;
  }
};

const saveState = state => {
  try {
    localStorage.setItem('contacts', JSON.stringify(state));
  } catch (error) {
    return undefined;
  }
};

export { getState, saveState };
