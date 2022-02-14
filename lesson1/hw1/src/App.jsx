import React from 'react';
import { users } from './userdata-context.js';
import Header from './Header.jsx';

class App extends React.Component {
  state = {
    userData: users.user1,
  };

  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

export default App;
