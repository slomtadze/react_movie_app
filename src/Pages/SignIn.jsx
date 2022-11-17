import bgImg from "../assets/backgroundIMG.jpg";

const SignIn = () => {
  return (
    <div className="h-screen w-full relative">
      <img src={bgImg} alt="movie img" className="h-full w-full cover center" />
      <div className="h-full w-full bg-black/50 absolute opacity-0.5 top-0 left-0 z-5" />
    </div>
  );
};

export default SignIn;
