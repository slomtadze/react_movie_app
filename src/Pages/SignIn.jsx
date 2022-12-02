import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../Layout/SignIn/Button";
import SignWrapper from "../Layout/SignIn/SignWrapper";
import { useContext, useState } from "react";
import AuthContext from "../Context/Auth-context";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().required("Requierd").email("Please enter a valid email"),
  password: Yup.string().required("Required"),
});

const SignIn = () => {
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (values) => {
    login(values.email, values.password, navigate, setError);
  };

  return (
    <SignWrapper>
      <div className="absolute z-5 bg-black/80 p-4 rounded-lg">
        <h2 className="text-center text-white mt-6 text-2xl font-bold">
          Sign In
        </h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="w-[350px] mb-6 px-4 pt-4 relative">
            <Input label="Email" type="email" id="email" />
            <Input label="Password" type="password" id="password" />
            {error && (
              <div className="absolute text-red-800 italic bottom-20 w-1/2">
                {error}
              </div>
            )}
            <div>
              <Button title="Login" type="submit" />
              <Button
                title="Cancel"
                type="button"
                onClick={() => navigate("/")}
              />
            </div>
            <p className="mt-2 text-white">
              Have not account yet?&nbsp;Register&nbsp;
              <Link
                to="../signUp"
                className="text-blue-300 italic hover:text-white"
              >
                Here
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </SignWrapper>
  );
};

export default SignIn;
