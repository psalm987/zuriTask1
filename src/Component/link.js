import { Link as RouterLink } from "react-router-dom";
export default function Link(props) {
  const { id, text, url, internal } = props;
  if (internal)
    return (
      <RouterLink className="link" to={url} id={id}>
        {text}
      </RouterLink>
    );
  return (
    <a className="link" id={id} href={url}>
      {text}
    </a>
  );
}
