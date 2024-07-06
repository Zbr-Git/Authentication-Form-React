import { Field, Formik, Form, ErrorMessage } from "formik";
import { Link, Outlet } from "react-router-dom";
import { LoginSchema } from "../../Utils/FormValidations.js";

const Login = () => {
  return (
    <>
    
    <div className="white:bg-gray-950 flex min-h-screen w-full items-center justify-center">
      <div className="bg-white-100 max-w-md rounded-lg px-8 py-6 shadow-md">
        <h1 className="dark mb-4 text-center text-2xl font-bold">Welcome Back!</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="dark mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
              <ErrorMessage name="email" component="div" />
              <div l="mb-4">
                <label
                  htmlFor="password"
                  className="dark mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Enter your password"
                  autoComplete="on"
                />
                <Link
                  to="/forget-password"
                  className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Forgot Password?
                </Link>
                <ErrorMessage name="password" component="div" />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:outline-none focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember"
                    className="dark ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/register"
                  className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create Account
                </Link>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default Login;
