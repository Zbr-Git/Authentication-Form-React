import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });

export  const SignupSchema = yup.object().shape({
    username: yup.string()
      .min(3, "Mininum 3 characters")
      .max(15, "Maximum 15 characters").required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol").required("Password Required"),
  });
