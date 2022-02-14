import React from 'react';
// import ThemedButton from './ThemedButton.jsx';
import { person, persons, UserDataContext } from './userdata-context.js';
import Header from './Header.jsx';

class App extends React.Component {
  state = {
    userData: person
  };

  render() {
    return (
      <UserDataContext.Provider value={this.state.userData}>
        <div className="page">
          <Header />
        </div>
      </UserDataContext.Provider>
    );
  }
}

export default App;
