import React from "react";
import CardFeedbackStyles from "./CardFeedback.module.css";

const CardFeedback = ({ hasErrors, label }) => {
  let content = "";

  if (hasErrors) {
    content = hasErrors;
  } else {
    content = label;
  }

  let classes = `${CardFeedbackStyles.feedback}`;

  if (hasErrors) {
    classes += ` ${CardFeedbackStyles.feedback_error}`;
  } else {
    classes += ` ${CardFeedbackStyles.feedback_instructions}`;
  }
  return <p className={classes}>{content}</p>;
};

export default CardFeedback;
