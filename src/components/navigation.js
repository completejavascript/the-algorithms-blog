import React from "react";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import { GridContainer, GridRow, GridColumn } from "../components/grid";

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
    <GridContainer>
      <GridRow
        style={{
          backgroundColor: `#FFF`,
          margin: `0 auto`,
          height: '100%'
        }}
      >
        <GridColumn sm="8" mobileHidden>
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
        </GridColumn>
        <GridColumn sm="4" xs="12">
          <Link style={linkStyle} to={`/lien-he/`}>Liên hệ</Link>
          <Link style={linkStyle} to={`/gioi-thieu/`}>Giới thiệu</Link>
          <Link style={linkStyle} to={`/`}>Trang chủ</Link>
        </GridColumn>
      </GridRow>
    </GridContainer>
  </nav>
)