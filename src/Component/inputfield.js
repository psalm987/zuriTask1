export default function InputField(props) {
  const { inputProps, id, key, helperText, labelText } = props;
  const inputID = id || key || Math.random().toString();
  return (
    <div className="input__holder">
      <label className="input__label" for={inputID}>
        {labelText}
      </label>
      <input
        {...inputProps}
        id={inputID}
        className={`input__box ${inputProps?.className || ""}`}
      />
      <p className="input__helper">{helperText || ""}</p>
    </div>
  );
}
