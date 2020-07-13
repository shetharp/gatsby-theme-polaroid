import React from "react";
import PropTypes from "prop-types";
import { PageProps } from "gatsby";

const TypescriptExamplePage: React.FC<PageProps> = (props) => {
  return (
    <>
      <h1>Path:</h1>
      Example page using typescript.
      <pre>{props.path}</pre>
    </>
  );
};
export default TypescriptExamplePage;

TypescriptExamplePage.propTypes = {
  path: PropTypes.string.isRequired,
};
