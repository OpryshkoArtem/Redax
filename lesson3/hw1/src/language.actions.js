export const LANG = 'LANG';

export const setLanguage = language => {
  return {
    type: LANG,
    payload: {
      language,
    },
  };
};
