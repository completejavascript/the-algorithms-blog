import React from "react";
import { rhythm } from "../utils/typography";
import slug from "slug";
import Link from "gatsby-link";
import WidgetContainer from "../components/widget-container";
import WidgetTitle from "../components/widget-title";

export default props => {
  let infoTags = {};
  props.tags.forEach(({ node }) => {
    node.frontmatter.tags.forEach(element => {
      if (infoTags[element] === undefined) infoTags[element] = 0;

      infoTags[element]++;
    });
  });

  const tagPairs = Object.entries(infoTags);
  const popularTagPairsSortedByNumber = [...tagPairs].sort((a, b) => b[1] - a[1]).slice(0, 20);
  const popularTagPairsSortedByAlphabet = [...popularTagPairsSortedByNumber].sort(); 
  const numberTagMax = popularTagPairsSortedByNumber[0][1];

  return (
    <WidgetContainer>
      <WidgetTitle> Thẻ phổ biến </WidgetTitle>
      {
        popularTagPairsSortedByAlphabet.map((tagPair, index) => {
          return (
            <Link 
              key={index} 
              to={`/tag/${slug(tagPair[0]).toLowerCase()}/`} 
              style={{
                marginRight: `${rhythm(1/6)}`,
                display: `inline-block`, 
                fontSize: `${rhythm((tagPair[1] / numberTagMax < 0.4 ? 0.4 : tagPair[1] / numberTagMax) * 1.05)}`,
              }}
            >
              {tagPair[0]}
            </Link>
          )
        })
      }
    </WidgetContainer>
  )
}