import React from "react";
import CardFeedback from "./CardFeedback";
import LoginInput from "./LoginInput";
import CardStyles from "./LoginCard.module.css";

const LoginCard = ({ data, hasErrors, onChange, onClick, value }) => {
  const FieldClasses = () => {
    let classes = `${CardStyles.field}`;
    if (hasErrors) {
      classes += ` ${CardStyles.field_error}`;
    } else {
      classes += ` ${CardStyles.field_normal}`;
    }
    return classes;
  };

  return (
    <div className={CardStyles.card}>
      <CardFeedback hasErrors={hasErrors} label={data.label} />

      <div className={FieldClasses()}>
        <LoginInput
          icon={data.icon}
          kind={data.kind}
          name={data.name}
          onChange={onChange}
          onClick={onClick}
          text={data.text}
          value={value}
        />
      </div>
    </div>
  );
};

export default LoginCard;
