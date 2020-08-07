/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { Link } from "gatsby";
import { useSiteMetadata, useMinimalBlogConfig } from "../hooks";
import { replaceSlashes } from "../utils";
import imgLogoIconDark from "../assets/logo-icon-dark.svg";
import imgLogoIconLight from "../assets/logo-icon-light.svg";

export type FooterLogoProps = {
  slug?: string;
};

export const FooterLogo: React.FC<FooterLogoProps> = (props) => {
  const { slug = "" } = props;
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();
  const [colorMode] = useColorMode();
  const isDarkMode = colorMode === `dark`;
  const isTextDark = !isDarkMode;
  const iconTitleText = `© ${new Date().getFullYear()} ${siteTitle}`;
  const imgFooterLogo = (
    <img src={isTextDark ? imgLogoIconDark : imgLogoIconLight} title={iconTitleText} alt={iconTitleText} width="48" />
  );
  return slug ? <Link to={replaceSlashes(`${basePath}/${slug}`)}>{imgFooterLogo}</Link> : imgFooterLogo;
};
