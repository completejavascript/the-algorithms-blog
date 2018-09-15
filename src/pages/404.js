import React from "react";
import WidgetContainer from "../components/widget-container";
import Helmet from "react-helmet";
import Link from "gatsby-link";

export default ({ data }) => (
  <article>
    <Helmet
      title={`404 Page - ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: `${data.site.siteMetadata.description}` },
        { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
      ]}
    />

    <h1>Trang bạn tìm kiếm không tồn tại</h1>
    <WidgetContainer>
      <p>Xin lỗi vì sự bất tiện này!</p>
      <Link to={`/`}>Quay lại trang chủ</Link>
    </WidgetContainer>
  </article>
);

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
        keywords
      }
    }
  }
`