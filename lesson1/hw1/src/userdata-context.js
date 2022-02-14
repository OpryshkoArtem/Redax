import React from "react";

export const users = {
    person1: {
        name: 'Nikola Tesla',
        avatar_url: 'https://avatars3.githubusercontent.com/u10001'
    }
}
export const UserDataContext = React.createContext(users.person1);