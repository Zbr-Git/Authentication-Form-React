import Home from "./pages/Home";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/Tanstack-Form/Form";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Layout from "./Layout/Layout";
import userAuth from "./pages/userAuth/userAuth";
import PrivateRoute from "./pages/PrivateRoute";
import Profile from "./pages/Profile";
import Counter from "./pages/Counter";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>  

        {/* <Route path="/products/:categoryName?" element={<Products />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/counter" element={<Counter />} />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Layout>
                <Profile></Profile>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route path="/">
          <Route index element={<h1>this is index</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          </Route> */}
      </Routes>
    </>
  );
}

export default App;
