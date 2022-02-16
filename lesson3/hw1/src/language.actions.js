export const SET_LANGUAGE = 'LANG/SET_LANGUAGE';

export const setLanguage = language => {
  return {
    type: SET_LANGUAGE,
    payload: {
      language,
    },
  };
};
