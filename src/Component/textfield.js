export default function TextField(props) {
  const { inputProps, key, id, errorText, labelText } = props;
  const inputID = id || key || Math.random().toString();
  return (
    <div className="input__holder">
      <label className="input__label" for={inputID}>
        {labelText}
      </label>
      <textarea
        {...inputProps}
        id={inputID}
        error={errorText ? "true" : ""}
        rows="4"
        className={`textfield__box ${inputProps?.className || ""}`}
      />
      <p className="textfield__error">{errorText || ""}</p>
    </div>
  );
}
