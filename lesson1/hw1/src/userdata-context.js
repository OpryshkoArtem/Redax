import React from 'react';

export const users = {
  user1: {
		name: 'Nicola Tesla',
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
	},
};

export const UserDataContext = React.createContext(users.user1);
