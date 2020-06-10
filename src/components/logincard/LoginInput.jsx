import React from "react";
import IconArrow from "../../images/icon_login_arrow.svg";
import InputStyles from "./LoginInput.module.css";
import SetIcon from "./SetIcon";

const LoginInput = ({ name, icon, kind, onChange, onClick, text, value }) => {
  return kind === "input" ? (
    <>
      <SetIcon icon={icon} />
      <input
        className={InputStyles.field}
        name={name}
        type="text"
        placeholder={text}
        onChange={onChange}
        required
        value={value}
      />
      <input
        type="image"
        className={InputStyles.arrow}
        src={IconArrow}
        onClick={onClick}
        alt="Next"
      />
    </>
  ) : (
    <>
      <p className={InputStyles.success}>{text}</p>
    </>
  );
};

export default LoginInput;
