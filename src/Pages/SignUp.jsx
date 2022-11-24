import SignWrapper from "../Layout/SignIn/SignWrapper";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Layout/SignIn/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../Context/Auth-context";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .matches(/^[a-zA-Z0-9_-]{3,16}$/, "Name must have 3-16 charachters"),
  email: Yup.string().required("Required").email("Please enter a valid Email"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Passwor must have min 8 charachters and include number and letter"
    ),
  confirm: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const SignUp = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (values) => {
    try {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_MOVIE_APP_APIKEY}`,
          {
            name: values.name,
            email: values.email,
            password: values.password,
            returnSecureToken: true,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
          login(response.data.idToken);
        });
    } catch (error) {
      console.log(error);
    }
    navigate("..");
  };

  return (
    <SignWrapper>
      <h2 className="text-center text-white mt-6 text-2xl font-bold">
        Sign Up
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="w-[450px] px-8 py-4">
          <Input type="text" id="name" label="Name" />
          <Input type="email" id="email" label="Email" />
          <Input type="password" id="password" label="Password" />
          <Input type="password" id="confirm" label="Confirm Password" />
          <div className="pb-2">
            <Button title="Confirm" type="submit" />
            <Button
              title="Cancel"
              type="button"
              onClick={() => navigate("/")}
            />
          </div>

          <p className="mt-2 text-gray-900">
            Already Registered?&nbsp;
            <Link
              to="../SignIn"
              className="text-blue-300 italic hover:text-white"
            >
              Sign In
            </Link>
          </p>
        </Form>
      </Formik>
    </SignWrapper>
  );
};

export default SignUp;
