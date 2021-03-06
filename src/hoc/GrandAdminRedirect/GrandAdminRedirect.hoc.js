import React from 'react';
import { Redirect } from 'react-router-dom';

export const GrandAdminRedirect = (Component) => (props) => {
  const { isGrandAdmin } = props;

  if (!isGrandAdmin) {
    return <Redirect to="/" />;
  }

  return <Component {...props} />;
};

export default GrandAdminRedirect;
