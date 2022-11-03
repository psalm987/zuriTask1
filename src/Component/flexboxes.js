export default function FlexBox(props) {
  const { row, children } = props || {};
  return (
    <div className={"flexBox " + (row ? "flexBox__row__nmob" : "")}>
      {children}
    </div>
  );
}
