import React from "react";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import WidgetContainer from "../components/widget-container";
import 'font-awesome/css/font-awesome.css';

const NavPageLink = props => {
  const { url, test, children } = props;

  return (
    <div>
      {
        test ? 
          <span>{children}</span> :
          <Link to={url}>{children}</Link>
      }
    </div>
  )
}

export default props => {
  const { index, pageCount, pathPrefix } = props;
  const fixPrefix = `/` + (pathPrefix ? `${pathPrefix}/` : ``);
  const previousUrl = fixPrefix + (index - 1 == 1 ? `` : `${(index - 1).toString()}/`);
  const nextUrl = fixPrefix + `${(index + 1).toString()}/`;
  const first = (index === 1);
  const last = (index === pageCount);
  
  // Create array respresense for each page as
  // value: 1 0 currentIndex 0 pageCount
  // display: 1 ... currentIndex ... pageCount 
  let arr = [];
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === pageCount || (i >= index - 2 && i <= index + 2)) arr.push(i); 
    else if (arr[arr.length - 1] !== 0) arr.push(0);
  }

  return (
    <WidgetContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <NavPageLink test={first} url={previousUrl} >
          <i className="fa fa-angle-double-left"></i>{" "}{"Quay lại"}
        </NavPageLink>

        <div>
          {
            arr.map((value, idx) => {
              return (
                value == 0 ?
                  <span key={idx}>...</span>
                  : 
                  value == index ? 
                    <span 
                      key={idx} 
                      style={{ margin: `${rhythm(1/4)}`, color: `#dd4b39`}}
                    >
                      {value}
                    </span> 
                    :
                    <Link 
                      key={idx} 
                      to={fixPrefix + (value == 1 ? `` : `${value}/`)}
                      style={{ margin: `${rhythm(1/4)}`}}
                    >
                      {value}
                    </Link>
              )
            })
          }
        </div>

        <NavPageLink test={last} url={nextUrl} >
          {"Tiếp theo"}{" "}<i className="fa fa-angle-double-right"></i>
        </NavPageLink>
      </div>
    </WidgetContainer>
  )
}