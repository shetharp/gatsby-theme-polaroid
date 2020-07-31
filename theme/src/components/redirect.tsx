import React, { useEffect } from "react";

export type RedirectProps = {
  to: string;
  delay?: number;
  shouldRender?: boolean;
};

export const Redirect: React.FC<RedirectProps> = (props) => {
  const { to, delay = 0, shouldRender = true } = props;
  const setRedirect = () => {
    window.location.href = to;
  };
  useEffect(() => {
    setTimeout(setRedirect, delay);
  });
  return shouldRender ? (
    <p>
      Redirecting to <a href={to}>{to}</a>
    </p>
  ) : (
    <></>
  );
};
export default Redirect;
