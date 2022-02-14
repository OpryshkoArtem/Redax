import React from 'react';

export const persons = {
  tesla: {
    name: 'Nicola Tesla',
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  },
  google: {
    name: 'Google Boogle',
    avatar_url: 'https://avatars3.githubusercontent.com/u10002',
  },
};

export const UserDataContext = React.createContext(persons.tesla);
