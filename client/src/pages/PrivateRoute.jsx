
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLoggedIn = false ;
  return (
    <>
      {isLoggedIn ? (
        props.children
      ) : (
        <>
          <Navigate to="/userAuth/login" />
        </>
      )}
    </>
  );
};

export default PrivateRoute;
