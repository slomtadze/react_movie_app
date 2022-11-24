import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../Layout/SignIn/Button";
import SignWrapper from "../Layout/SignIn/SignWrapper";
import { useContext } from "react";
import AuthContext from "../Context/Auth-context";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const onSubmit = (values) => {
    try {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_REACT_MOVIE_APP_APIKEY}`,
          {
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
        .then((res) => {
          login(res.data.idToken);
        });
    } catch (error) {
      console.log(error);
    }

    navigate("..");
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Requierd").email("Please enter a valid email"),
    password: Yup.string().required("Required"),
  });
  const navigate = useNavigate();

  return (
    <SignWrapper>
      <h2 className="text-center text-white mt-6 text-2xl font-bold">
        Sign In
      </h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="w-[350px] mb-6">
          <Input label="Email" type="email" id="email" />
          <Input label="Password" type="password" id="password" />
          <div>
            <Button title="Sign In" type="submit" />
            <Button
              title="Cancel"
              type="button"
              onClick={() => navigate("/")}
            />
          </div>
          <p className="mt-2 text-gray-900">
            Have not account yet?&nbsp;Register&nbsp;
            <Link
              to="../SignUp"
              className="text-blue-300 italic hover:text-white"
            >
              Here
            </Link>
          </p>
        </Form>
      </Formik>
    </SignWrapper>
  );
};

export default SignIn;
