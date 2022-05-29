export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  }
};

export const userDateRecieved = userData => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData,
    }
  };
};