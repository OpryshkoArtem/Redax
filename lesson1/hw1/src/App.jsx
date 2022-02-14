import React from 'react';
import { UserDataContext } from './userdata-context.js';
import Header from './Header.jsx';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nicola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state.userData}>
          <Header />
        </UserDataContext.Provider>
      </div>
    );
  }
}

export default App;
