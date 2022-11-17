import bgImg from "../../assets/backgroundIMG.jpg";

const SignWrapper = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <img
        src={bgImg}
        alt="movie img"
        className="h-full w-full cover top-0 left-0 absolute z-5"
      />
      <div className="h-full w-full bg-black/50 absolute opacity-0.5 top-0 left-0 z-10" />
      <div className="h-[450px] w-[400px] bg-gray-600 opacity-90 fixed z-20 top-1/2 left-1/2 -ml-[200px] -mt-[225px] rounded-lg">
        Wrapper
      </div>
    </div>
  );
};

export default SignWrapper;
