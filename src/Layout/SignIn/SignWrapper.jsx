import bgImg from "../../assets/backgroundIMG.jpg";

const SignWrapper = ({ children }) => {
  const backgroundIMG = {
    backgroundImage: `url("${bgImg}")`,
    backgroundSize: "cover",
    backgroundPositioc: "center",
  };

  return (
    <div
      className="h-screen w-screen relative flex justify-center items-center "
      style={backgroundIMG}
    >
      <div className="h-full w-full bg-black/50 absolute opacity-0.5 top-0 left-0 z-2" />
      {children}
    </div>
  );
};

export default SignWrapper;
