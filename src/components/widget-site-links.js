import React from "react";
import WidgetContainer from "../components/widget-container";
import WidgetTitle from "../components/widget-title";

const title = `Liên kết`;

export default ({ siteLinks }) => {
  return (
    <WidgetContainer>
      <WidgetTitle> {title} </WidgetTitle>
      <ul
        style={{
          listStyleType: `none`,
          marginLeft: 0
        }}
      >
        {
          siteLinks.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            )
          })
        }
      </ul>
    </WidgetContainer>
  )
}