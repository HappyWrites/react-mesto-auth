import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn }) {
  return (
    loggedIn ? <Route>{children}</Route> : <Redirect to="/sign-up" />
  )
}
export default ProtectedRoute;