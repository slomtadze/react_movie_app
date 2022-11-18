import SignWrapper from "../Layout/SignIn/SignWrapper";
import Input from "../components/Input";

const SignUp = () => {
  return (
    <SignWrapper>
      <h2 className="text-center text-white mt-6 text-2xl font-bold">
        Sign Up
      </h2>
      <form className="px-16 py-4">
        <Input type="text" id="name" label="Name" />
        <Input type="email" id="email" label="Email" />
        <Input type="password" id="password" label="Password" />
        <Input type="password" id="re-password" label="Repeat Password" />
        <div>
          <button className="text-white text-sm  bg-blue-500 mt-6 mr-2 px-4 py-2 rounded-lg hover:bg-blue-800 transition:duration-400 ">
            Confirm
          </button>
          <button className="text-white text-sm  bg-blue-500 mt-6 mr-2 px-4 py-2 rounded-lg hover:bg-blue-800 transition:duration-400 ">
            Cancel
          </button>
        </div>
        <p className="mt-2 text-gray-900">
          Need help? Click{" "}
          <a className="text-blue-300 italic hover:text-white" href="">
            HERE
          </a>{" "}
        </p>
      </form>
    </SignWrapper>
  );
};

export default SignUp;
