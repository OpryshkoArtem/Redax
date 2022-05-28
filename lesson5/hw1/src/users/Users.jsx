import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

class Users extends React.Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    this.props.createUser(newUser);
  };
  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onUserCreate}>
          Create User
        </button>
        <ul className="users__list">
          {users.map(user => (
            <li key={user.id} className="users__list-item">
              <span>{user.name}</span>
              <button onClick={() => deleteUser(user.id)} className="users__delete-btn">
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.usersList,
  };
};

const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;

{
  /* <li className="users__list-item">
            <span>User # 232286</span>
            <button className="users__delete-btn">+</button>
          </li>
          <li className="users__list-item">
            <span>User # 551949</span>
            <button className="users__delete-btn">+</button>
          </li>
          <li className="users__list-item">
            <span>User # 328468</span>
            <button className="users__delete-btn">+</button>
          </li> */
}
