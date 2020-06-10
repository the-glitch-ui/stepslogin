import React from "react";
import IconStyles from "./SetIcon.module.css";
import IconUser from "../../images/icon_login_user.svg";
import IconEmail from "../../images/icon_login_email.svg";
import IconKey from "../../images/icon_login_key.svg";

const SetIcon = ({ icon }) => {
  switch (icon) {
    case "IconUser":
      return <img className={IconStyles.icon} src={IconUser} alt="Username" />;
    case "IconEmail":
      return <img className={IconStyles.icon} src={IconEmail} alt="Email" />;
    case "IconKey":
      return <img className={IconStyles.icon} src={IconKey} alt="Password" />;
    default:
      break;
  }
};

export default SetIcon;
