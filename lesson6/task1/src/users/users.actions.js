export const NEXT_PAGE = 'USERS/NEXT_PAGE';
export const PREV_PAGE = 'USERS/PREV_PAGE';

export const goNext = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const goPrev = () => {
  return {
    type: PREV_PAGE,
  };
};
