export default function Checkbox(props) {
  const { children, checked, onChange, disabled } = props;
  const active = !disabled;
  const activeState = active ? "true" : "false";
  return (
    <div className="input__holder">
      <label className="checkbox__holder" tabIndex={active ? "0" : null}>
        {children || "empty"}
        <input
          type="checkbox"
          onChange={active ? onChange : null}
          active={activeState}
          checked={!!active && checked ? "checked" : ""}
        />
        <span class="checkmark" active={activeState}></span>
      </label>
    </div>
  );
}
