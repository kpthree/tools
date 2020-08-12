import React, { forwardRef } from "react";
import Icon from "./icon";

const Check = forwardRef((props, ref) => {
  return (
    <Icon {...props} ref={ref} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
      />
    </Icon>
  );
});

export default Check;
