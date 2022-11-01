import React from "react";
import slack from "../Resource/Image/slack_icon.png";
import github from "../Resource/Image/github_icon.png";

export default function LinkSection() {
  const linkData = [
    {
      id: "btn__zuri",
      text: "Zuri Team",
      url: "https://training.zuri.team/"
    },
    {
      id: "books",
      text: "Zuri Team",
      url: "http://books.zuri.team "
    },
    {
      id: "book__python",
      text: "Zuri Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
    },
    {
      id: "pitch",
      text: "Background Check for Coders",
      url: "https://background.zuri.team"
    },
    {
      id: "book__design",
      text: "Design Books",
      url: "https://books.zuri.team/design-rules"
    }
  ];
  return (
    <div className="section linkSection">
      {linkData.map(({ id, text, url }, index) => {
        return (
          <a className="link" id={id} href={url} key={index}>
            {text}
          </a>
        );
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
