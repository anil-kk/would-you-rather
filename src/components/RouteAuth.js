import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


function RouteAuth({children, auth, ...remainingProps}) {

    return (
      <Route
        {...remainingProps}
        render={({ location }) =>
          auth && auth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  const mapStateToProps = (state, ownProps) => {
      return {
          auth: state.auth
      }
  }

  export default connect(mapStateToProps)(RouteAuth)
