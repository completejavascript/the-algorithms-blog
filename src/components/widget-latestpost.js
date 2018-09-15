import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import WidgetContainer from "../components/widget-container";
import WidgetTitle from "../components/widget-title";

export default props => { 
  return (
    <WidgetContainer>
      <WidgetTitle> Bài viết mới nhất </WidgetTitle>
      <ul 
        style={{
          listStyleType: `none`,
          marginLeft: 0
        }}
      >
        {
          props.latestPosts.map(({ node }, index) => {
            return (
              <li 
                key={index}
                style={{
                  marginBottom: `${rhythm(0.35)}`
                }}
              >
                <Link to={node.fields.slug}>
                  {node.frontmatter.title.charAt(0).toUpperCase() + node.frontmatter.title.slice(1)}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </WidgetContainer>
  )
}
