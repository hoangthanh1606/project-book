import { Route, Redirect } from "react-router-dom";

function LoginLayout(props) {
  const { exact, path, component: Component, ...other } = props;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  if (userInfo && userInfo.id) {
    return (
      <Redirect to='/' />
    )
  }
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
          <>
            <Component {...other} {...props} />
          </>
        );
      }}
    />
  );
}

export default LoginLayout;
