import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../Layout/SignIn/Button";
import SignWrapper from "../Layout/SignIn/SignWrapper";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <SignWrapper>
      <h2 className="text-center text-white mt-6 text-2xl font-bold">
        Sign In
      </h2>
      <form className="w-[350px] mb-6">
        <Input label="Name" type="input" id="name" />
        <Input label="Password" type="password" id="password" />
        <div>
          <Button title="Sign In" type="submit" />
          <Button title="Cancel" type="button" onClick={() => navigate("/")} />
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
      </form>
    </SignWrapper>
  );
};

export default SignIn;
