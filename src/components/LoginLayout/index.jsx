import { Route } from "react-router-dom";

function LoginLayout(props) {
  const { exact, path, component: Component, ...other } = props;
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
