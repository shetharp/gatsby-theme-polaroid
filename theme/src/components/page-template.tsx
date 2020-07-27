/** @jsx jsx */
import { jsx, Heading, Divider } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./layout";
import SEO from "./seo";

export type PageTemplateProps = {
  data: {
    page: {
      title: string;
      slug: string;
      excerpt: string;
      body: string;
    };
  };
};

export const PageTemplate: React.FC<PageTemplateProps> = ({ data: { page } }) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Heading>{page.title}</Heading>

    <Divider variant="dividers.pageHeading" />

    <section>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
);

export default PageTemplate;
