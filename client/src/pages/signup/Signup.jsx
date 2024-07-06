import { Field, Formik, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { SignupSchema } from "../../Utils/FormValidations.js";
import ApiRequest from "../../Utils/axios.js";

const Signup = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await ApiRequest.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      if (response.status === 201) { // Adjusted this line
        console.log("Form submitted:", values);
        console.log("Response:", response);
      } else {
        console.error("An error occurred while submitting the form.");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form.", error);
    }
    setSubmitting(false);
  };

  return (
    <div className="white:bg-gray-950 flex min-h-screen w-full items-center justify-center">
      <div className="bg-white-100 max-w-md rounded-lg px-8 py-6 shadow-md">
        <h1 className="dark mb-4 text-center text-2xl font-bold">Register</h1>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="dark mb-2 block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Enter your Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
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
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="dark mb-2 block text-sm font-medium text-gray-700"
                >
                  Create New Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  placeholder="Enter your password"
                  autoComplete="new-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
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
                    className="dark ml-2 mr-12 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/login"
                  className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Already Have an Account?
                </Link>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Signup
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
