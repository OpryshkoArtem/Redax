import { LANG } from './language.actions';

const initialState = 'en';

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG: {
      return {
        state: action.payload.language,
      };
    }
    default:
      return initialState;
  }
};

export default languageReducer;
