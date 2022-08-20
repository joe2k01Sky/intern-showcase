//import { Icon } from "@sky-uk/toolkit-react";
import React from "react";

const Button = ({
  cssClassName,
  styling,
  type,
  text,
  fullWidth,
  id,
  onClick,
  disabled,
  icon,
  autoFocus
}) => {
  let className = fullWidth ? "c-btn c-btn--full" : "c-btn";
  if (styling === "invert") styling = "secondary-invert";

  return (
    <div className="button">
      <button
        className={`${className} ${
          disabled ? "btn-disabled" : `c-btn--${styling}`
        }${cssClassName !== undefined ? " " + cssClassName : ""}`}
        id={id}
        data-test-id={id}
        type={type === "submit" || type === "reset" ? type : "button"}
        onClick={onClick}
        autoFocus={autoFocus}
      >
        <div className="btn-content">
          {/*icon && (
            <Icon
              svgSource={icon}
              dataAttributes={{ "test-id": `buttonIcon` }}
              cssClassName="btn-icon"
              inline
            />
          )*/}
          <div className="btn-text">{text}</div>
          {/* {text} */}
        </div>
      </button>
    </div>
  );
};

Button.defaultProps = {
  styling: "primary"
};

export default Button;
