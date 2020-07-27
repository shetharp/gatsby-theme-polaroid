/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { replaceSlashes } from "../utils";
import { useSiteMetadata, useMinimalBlogConfig } from "../hooks";
import { SystemStyleObject } from "@styled-system/css";
import imgLogoDark from "../assets/logo-dark.svg";
import imgLogoLight from "../assets/logo-light.svg";

export type HeaderLogoProps = {
  isTextDark: boolean;
};

export const HeaderLogo: React.FC<HeaderLogoProps> = (props) => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();
  const { isTextDark } = props;

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none`, height: "100%" }}
    >
      <h1 sx={sxH1}>
        <img src={isTextDark ? imgLogoDark : imgLogoLight} alt={siteTitle} />
      </h1>
    </Link>
  );
};
export default HeaderLogo;

/**
 * Styles
 */

const sxH1: SystemStyleObject = {
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  margin: 0,
  paddingX: [2, null, null, null, 3, null, null, 4, null, 5],
  height: "100%",
  "& img": {
    height: ["24", null, null, null, "32"],
  },
};
