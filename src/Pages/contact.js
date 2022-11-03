import React from "react";
import InputField from "../Component/inputfield.js";
import TextField from "../Component/textfield.js";
import FlexBox from "../Component/flexboxes.js";
import Checkbox from "../Component/checkbox.js";
import Button from "../Component/button.js";
import "../Styles/formstyles.css";

export default function Contact() {
  const [checked, setChecked] = React.useState(false);
  const name = "Samuel Seibidor";

  return (
    <div className="pageHolder contactPage">
      <h1 className="pageHeader">Contact Me</h1>
      <p className="lead">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <FlexBox>
        <FlexBox row={true}>
          <InputField
            id="first_name"
            labelText="First Name"
            inputProps={{ placeHolder: "Enter your first name" }}
          />
          <InputField
            id="last_name"
            labelText="Last Name"
            inputProps={{ placeHolder: "Enter your last name" }}
          />
        </FlexBox>
        <InputField
          id="email"
          labelText="Email"
          inputProps={{ placeHolder: "yourname@email.com", type: "email" }}
        />
        <TextField
          id="message"
          labelText="Message"
          inputProps={{
            placeHolder:
              "Send me a message and I'll reply you as soon as possible...",
          }}
        />
        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
          You agree to providing your data to {name} who may contact you.
        </Checkbox>
        <Button id="btn__submit">Send Message</Button>
      </FlexBox>
    </div>
  );
}
