import React from 'react'
import {Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

/*
https://reactrouter.com/web/example/auth-workflow
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
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
*/

const UserRoute = ({children, ...rest}) => {
    const {user} = useSelector((state) => ({...state}))

    return user && user.token ? (
        <Route {...rest} render = {() => children}/>
    ) : (
        <LoadingToRedirect/>
    )

}

export default UserRoute; 