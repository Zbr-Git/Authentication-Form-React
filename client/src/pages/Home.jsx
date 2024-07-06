import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <nav>
        <NavLink to="/login">Login</NavLink> <br />
        <NavLink to="/register">Signup</NavLink> <br />
        <NavLink to="/counter">Counter</NavLink>
      </nav>
    </>
  );
};

export default Home;
