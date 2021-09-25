/* eslint-disable */
import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import WithUseDBData from 'Hoc/Firebase';
import WithAuthRedirect from 'Hoc/WithAuthRedirect';
import { getAdminConfig, getChatBoardsConfig } from 'Utils/FirebaseGetters';

import ChatBoardPage from './ChatBoardPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
  uid: state.AdminReducer.admin?.uid,
  admin: state.AdminReducer.admin,
});

export const mapDispatchToProps = () => ({
  someDispatch: (data) => console.log('from some dispatch', data)
});

export const ChatBoardPageContainer = (props) => {
  const [activeTabId, setActiveTabId] = useState(0);

  const containerProps = () => ({
    activeTabId,
    setActiveTabId,
  });

  return (
    <ChatBoardPage {...containerProps()} />
  );
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithUseDBData([
    getAdminConfig(),
    getChatBoardsConfig()
  ]),
  WithAuthRedirect(),
)(ChatBoardPageContainer);
