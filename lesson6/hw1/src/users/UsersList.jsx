import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination.jsx';
import * as counterActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const userToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
      />
      <ul className="users">
        {userToRender.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: counterActions.goNext,
  goPrev: counterActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
