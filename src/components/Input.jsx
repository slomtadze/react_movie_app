const Input = ({ type, id, label }) => {
  return (
    <div className="font-mono text-white flex flex-col justify-center align-start">
      <label className="font-mono mb-0.5" htmlFor={id}>
        {label}
      </label>
      <input
        className="text-black outline-none rounded px-4 py-[4px] mb-2"
        type={type}
        name={id}
        id={id}
        placeholder={label}
      ></input>
    </div>
  );
};

export default Input;
