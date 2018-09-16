import React from "react";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
// import { GridContainer, GridRow, GridColumn } from "../components/grid";
import "./grid.css";
import "./navigation.css";

const linkStyle = {
  float: `right`,
  marginLeft: `${rhythm(0.5)}`,
  marginTop: `${rhythm(0.35)}`
};

export default (props) => (
  <nav
    style={{
      backgroundColor: `#FFFFFF`,
      boxShadow: `inset 0 -1px 0 0 #fff, 0 1px 5px rgba(0,0,0,.1)`,
      height: `${props.height}px`
    }}
  >
    <div className="gr-container">
      <div className="gr-row"
        style={{
          backgroundColor: `#FFF`,
          margin: `0 auto`,
          height: '100%'
        }}
      >
        <div className="mobileHidden gr-col-sm-8">
          <Link to={`/`}>
            <p
              style={{
                marginBottom: `0`,
                marginTop: `0`,
                display: `inline-block`,
                fontStyle: `normal`,
                fontSize: `${rhythm(1)}`,
                fontWeight: `600`
              }}
            >
              {props.title}
            </p>
          </Link>
        </div>
        <div className="gr-col-sm-4 gr-col-xs-12">
          <Link style={linkStyle} to={`/lien-he/`}>Liên hệ</Link>
          <Link style={linkStyle} to={`/gioi-thieu/`}>Giới thiệu</Link>
          <Link style={linkStyle} to={`/`}>Trang chủ</Link>
        </div>
      </div>
    </div>
  </nav>
)