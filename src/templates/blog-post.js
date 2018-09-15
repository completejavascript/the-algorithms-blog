import React from "react";
import { rhythm } from "../utils/typography";
import Helmet from "react-helmet";
import CategoryTag from "../components/category-tag";
import WidgetContainer from "../components/widget-container";
import PostInfo from "../components/post-info";
import Share from "../components/share";
import NavPost from "../components/nav-post";
import FacebookProvider, { Comments } from 'react-facebook';

const RowPostWrapper = ({ children }) => (
  <div
    style={{
      marginTop: `${rhythm(1 / 2)}`,
      paddingTop: `${rhythm(1 / 2)}`,
      borderTop: `1px solid hsla(0,0%,0%,0.07)`,
    }}
  >
    {children}
  </div>
)

export default ({ data }) => {
  const { post, prevPost, nextPost } = data;
  const url = `${data.site.siteMetadata.siteUrl}${post.fields.slug}`;
  const seoTitle = `${post.frontmatter.title} - ${data.site.siteMetadata.title}`;

  return (
    <article>
      <Helmet
        title={seoTitle}
        meta={[
          { name: 'description', content: `${post.excerpt}` },
          { name: 'keywords', content: `${post.frontmatter.keywords}` },
          // Open Graph Data
          { property: 'og:title', content: `${seoTitle}` },
          { property: 'og:url', content: `${url}` },
          { property: `og:type`, content: `website` },
          { property: `og:description`, content: `${post.excerpt}` },
          // Twitter Card
          { property: 'twitter:card', content: `summary` },
          { property: 'twitter:title', content: `${seoTitle}` },
          { property: 'twitter:url', content: `${url}` },
          { property: `twitter:description`, content: `${post.excerpt}` }
        ]}
        link={[
          { rel: "canonical", href: `${url}` }
        ]}
      />

      <h1 style={{ marginBottom: `${rhythm(1 / 4)}` }}>
        {post.frontmatter.title}
      </h1>

      <PostInfo
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
      />
      <RowPostWrapper>
        <span>Share:</span>{" "}
        <Share
          data={{
            url: url,
            title: `${post.frontmatter.title} - ${data.site.siteMetadata.title}`,
            tags: post.frontmatter.tags,
            twitterHandle: data.site.siteMetadata.twitterHandle
          }}
        />
      </RowPostWrapper>

      <WidgetContainer>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <CategoryTag node={post} />

        <RowPostWrapper>
          <span>Share:</span>{" "}
          <Share
            data={{
              url: url,
              title: `${post.frontmatter.title} - ${data.site.siteMetadata.title}`,
              tags: post.frontmatter.tags,
              twitterHandle: data.site.siteMetadata.twitterHandle
            }}
          />
        </RowPostWrapper>

        <RowPostWrapper>
          <NavPost
            nextPost={{
              title: nextPost ? nextPost.frontmatter.title : "",
              slug: nextPost ? nextPost.fields.slug : ""
            }}
            prevPost={{
              title: prevPost ? prevPost.frontmatter.title : "",
              slug: prevPost ? prevPost.fields.slug : ""
            }}
          />
        </RowPostWrapper>

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
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!, $prevSlug: String!, $nextSlug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        categories
        tags
      }
      fields {
        slug
      }
      excerpt
      timeToRead
    }
    prevPost: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
			frontmatter {
				title
			}
			fields {
				slug
			}
		}
		nextPost: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
			frontmatter {
				title
			}
			fields {
				slug
			}
		}
    site {
      siteMetadata {
        title
        siteUrl
        twitterHandle
        fbCommentId
      }
    }
  }
`;