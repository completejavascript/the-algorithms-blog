import React from "react";
import WidgetContainer from "../components/widget-container";
import Helmet from "react-helmet";
import FacebookProvider, { Comments } from 'react-facebook';

export default ({ data }) => {
  const seoTitle = `Liên hệ - ${data.site.siteMetadata.title}`;
  const url = `${data.site.siteMetadata.siteUrl}/gioi-thieu/`;

  return (
    <article>
      <Helmet
        title={seoTitle}
        meta={[
          { name: 'description', content: `${data.site.siteMetadata.description}` },
          { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
        ]}
      />

      <h1>Liên hệ</h1>
      <WidgetContainer>
        <p>
          Nếu các bạn có góp ý hay thắc mắc gì về những kiến thức lập trình, thuật toán mà cần liên lạc với mình, bạn có thể thực hiện một trong các cách sau đây:
      </p>
        <ul>
          <li>Email: {data.site.siteMetadata.email}</li>
          <li>Facebook Fanpage: <a href={data.site.siteMetadata.fanpage}>Ôn luyện thuật toán</a></li>
          <li>Facebook Group: <a href={data.site.siteMetadata.fbGroup}>Hỏi đáp thuật toán VN</a></li>
        </ul>
      </WidgetContainer>

      <WidgetContainer>
        <FacebookProvider appId={data.site.siteMetadata.fbCommentId}>
          <Comments
            href={url}
            width="100%"
            dataNumposts="5"
          />
        </FacebookProvider>
      </WidgetContainer>
    </article>
  )
}

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
        keywords
        fanpage
        email
        fbGroup
        siteUrl
        fbCommentId
      }
    }
  }
`