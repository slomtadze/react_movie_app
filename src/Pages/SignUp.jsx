import SignWrapper from "../Layout/SignIn/SignWrapper";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Layout/SignIn/Button";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <SignWrapper>
      <h2 className="text-center text-white mt-6 text-2xl font-bold">
        Sign Up
      </h2>
      <form className="w-[450px] px-8 py-4">
        <Input type="text" id="name" label="Name" />
        <Input type="email" id="email" label="Email" />
        <Input type="password" id="password" label="Password" />
        <Input type="password" id="re-password" label="Repeat Password" />
        <div className="pb-2">
          <Button title="Confirm" type="submit" />
          <Button title="Cancel" type="button" onClick={() => navigate("/")} />
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
      </form>
    </SignWrapper>
  );
};

export default SignUp;
