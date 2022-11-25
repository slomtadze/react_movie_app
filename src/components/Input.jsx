import { ErrorMessage, Field } from "formik";

const Input = ({ type, id, label }) => {
  return (
    <div className="font-mono text-white flex flex-col justify-center align-start">
      <label className="font-mono mb-0.5" htmlFor={id}>
        {label}
      </label>
      <Field
        className="text-gray-200 outline-none rounded px-4 py-[4px] mb-2 bg-gray-600 italic"
        type={type}
        name={id}
        id={id}
        placeholder={label}
      ></Field>
      <ErrorMessage
        name={id}
        render={(errorMsg) => (
          <span className="text-sm text-red-500">{errorMsg}</span>
        )}
      />
    </div>
  );
};

export default Input;
