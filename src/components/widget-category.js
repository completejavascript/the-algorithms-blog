import React from "react";
import { rhythm } from "../utils/typography";
import slug from "slug";
import Link from "gatsby-link";
import WidgetContainer from "../components/widget-container";
import WidgetTitle from "../components/widget-title";

export default props => {
  let infoCategories = {};
  props.categories.forEach(({ node }) => {
    node.frontmatter.categories.forEach(element => {
      if (infoCategories[element] === undefined) infoCategories[element] = 0;

      infoCategories[element]++;
    });
  });

  return (
    <WidgetContainer>
      <WidgetTitle> Chuyên mục </WidgetTitle>
      <ul 
        style={{
          listStyleType: `none`,
          marginLeft: `0`
        }}
      >
        {
          Object.entries(infoCategories).map((categoryPair, index) => {
            return (
              <li key={index}
                style={{
                  display: `flex`,
                  justifyContent: `space-between`,
                  marginBottom: `${rhythm(0.35)}`
                }}
              >
                <Link to={`/category/${slug(categoryPair[0]).toLowerCase()}/`}>
                  <span>{categoryPair[0].charAt(0).toUpperCase() + categoryPair[0].slice(1)}</span>
                </Link>

                <span style={{color: `#aaa`}}> 
                  {" "}({categoryPair[1]})
                </span>
              </li>
            )
          })
        }
      </ul>
    </WidgetContainer>
  )
}