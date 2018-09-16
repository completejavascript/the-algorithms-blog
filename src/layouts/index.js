import React from "react";
import { rhythm } from "../utils/typography";
import Navigation from "../components/navigation";
import WidgetCategory from "../components/widget-category";
import WidgetLatestPost from "../components/widget-latestpost";
import WidgetGoogleSearch from "../components/widget-search";
import WidgetFacebook from "../components/widget-facebook";
import WidgetTagCloud from "../components/widget-tag-cloud";
import { GridContainer, GridRow, GridColumn } from "../components/grid";
import Helmet from "react-helmet";
import './index.css';
import favicon from "../images/favicon.ico";

const NAV_HEIGHT = 64;

const SideBar = props => (
  <aside>
    <WidgetGoogleSearch siteUrl={props.siteUrl} />
    <WidgetCategory categories={props.categories} />
    <WidgetLatestPost latestPosts={props.latestPosts} />
    <WidgetFacebook fbConfig={props.fbConfig}/>
    <WidgetTagCloud tags={props.tags} />
  </aside>
);

const Footer = props => (
  <footer
    style={{
      color: `#fff`,
      backgroundColor: `#222`,
      padding: `${rhythm(0.35)}`,
      marginTop: `${rhythm(1 / 4)}`,
      fontSize: `${rhythm(0.55)}`
    }}
  >
    <GridContainer>
      <p style={{margin: "0", textAlign: `center`}}>
        Copyright © 2016-2018 by <a href="http://about.phamvanlam.com">Lam Pham</a>.{" "}
        Powered by <a href="https://www.gatsbyjs.org">Gatsby</a>.
      </p>
      <p style={{margin: "0", textAlign: `center`}}>
        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.{" "}
        The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </GridContainer>
  </footer>
);

export default ({ children, data }) => (
  <div>
    <Helmet
      htmlAttributes={{
        lang: data.site.siteMetadata.lang
      }}
      link={[
        { rel: "shortcut icon", type: "image/x-icon", href: `${favicon}` },
        { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" }
      ]}
    />

    <Navigation
      title={data.site.siteMetadata.title}
      height={NAV_HEIGHT}
    />

    <GridContainer>
      <GridRow>
        <GridColumn md={8} sm={12} xs={12}>
          {children()}
        </GridColumn>

        <GridColumn md={4} sm={4} xs={12}>
          <SideBar
            categories={data.topics.edges}
            tags={data.topics.edges}
            latestPosts={data.latestPosts.edges}
            siteUrl={data.site.siteMetadata.siteUrl}
            fbConfig={{
              fanpage: data.site.siteMetadata.fanpage,
              fbPageId: data.site.siteMetadata.fbPageId
            }}
          />
        </GridColumn>
      </GridRow>
    </GridContainer>

    <Footer />
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        siteUrl
        lang
        fanpage
        fbPageId
      }
    }
    topics: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            categories
            tags
          }
        }
      }
    }
    latestPosts: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`