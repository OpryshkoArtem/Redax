import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions.js';
import { getUserData } from './users.gateway.js';

class SearchField extends React.Component {
  state = {
    userName: '',
  };

  onChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleUserSearch = () => {
    this.props.showSpinner();
		getUserData(this.state.userName)
			.then(userData => {
				this.props.userDataRecieved(userData);
			});
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          onChange={this.onChange}
          value={this.state.userName}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  showSpinner: usersActions.showSpinner,
	userDataRecieved: usersActions.userDataRecieved,
};

export default connect(null, mapDispatch)(SearchField);
