import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../Layout/SignIn/Button";
import SignWrapper from "../Layout/SignIn/SignWrapper";

const initialValues = {
  name: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Requierd")
      .matches(/^[a-zA-Z0-9_-]{3,16}$/, "Min 3 and Max 16 charachters"),
    password: Yup.string().required("Required"),
  });
  const navigate = useNavigate();

  return (
    <SignWrapper>
      <h2 className="text-center text-white mt-6 text-2xl font-bold">
        Sign In
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="w-[350px] mb-6">
          <Input label="Name" type="input" id="name" />
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
