import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import slug from "slug";
import 'font-awesome/css/font-awesome.css';

export default (props) => {
  const node = props.node;

  return (
    <div
      style={{
        display: `flex`,
        marginTop: `${rhythm(1 / 2)}`,
        paddingTop: `${rhythm(1 / 2)}`,
        borderTop: `1px solid hsla(0,0%,0%,0.07)`,
        color: `#AAA`,
        fontSize: `${rhythm(0.55)}`
      }}
    >
      <div style={{ flex: `1` }}>
        <i className="fa fa-folder-open"></i>{" "}
        {
          node.frontmatter.categories.map((category, index) => {
            return (
              <Link key={index} to={`/category/${slug(category).toLowerCase()}/`}>
                {
                  index < node.frontmatter.categories.length - 1 ?
                    <span key={index}>{category}, </span> :
                    <span key={index}>{category} </span>
                }
              </Link>
            )
          })
        }
      </div>

      <div style={{ flex: `1`, textAlign: `right` }}>
        <i className="fa fa-tags"></i>{" "}
        {
          node.frontmatter.tags.map((tag, index) => {
            return (
              <Link key={index} to={`/tag/${slug(tag).toLowerCase()}/`}>
                {
                  index < node.frontmatter.tags.length - 1 ?
                    <span key={index}>{tag}, </span> :
                    <span key={index}>{tag} </span>
                }
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}