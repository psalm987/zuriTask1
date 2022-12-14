import Link from "../Component/link.js";
import slack from "../Resource/Image/slack_icon.png";
import github from "../Resource/Image/github_icon.png";

export default function LinkSection() {
  const linkData = [
    {
      id: "btn__zuri",
      text: "Zuri Team",
      url: "https://training.zuri.team/",
    },
    {
      id: "books",
      text: "Zuri Books",
      url: "http://books.zuri.team ",
    },
    {
      id: "book__python",
      text: "Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=seibidor.samuel",
    },
    {
      id: "pitch",
      text: "Background Check for Coders",
      url: "https://background.zuri.team",
    },
    {
      id: "book__design",
      text: "Design Books",
      url: "https://books.zuri.team/design-rules",
    },
    {
      id: "contact",
      text: "Contact Me",
      url: "/contact",
      internal: true,
    },
  ];
  return (
    <div className="section linkSection">
      {linkData.map((props, index) => {
        return <Link {...props} key={index} />;
      })}
      <div className="iconSection">
        <a href="/">
          <img src={slack} alt="Slack icon" />
        </a>
        <a href="/">
          <img src={github} alt="Github icon" />
        </a>
      </div>
    </div>
  );
}
