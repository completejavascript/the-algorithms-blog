import React from "react";
import Link from "gatsby-link";
import 'font-awesome/css/font-awesome.css';

const NavPostLink = props => {
  const { post, children } = props;

  return (
    <div>
      {
        post.slug !== "" ? 
          <Link to={post.slug}>{children}</Link> : 
          <span>{children}</span>
      }
    </div>
  )
}
 
export default props => {
  const { prevPost, nextPost } = props;

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <NavPostLink post={prevPost} >
        <i className="fa fa-angle-double-left"></i>{" "}{"Quay lại"}
      </NavPostLink>

      <NavPostLink post={nextPost} >
        {"Tiếp theo"}{" "}<i className="fa fa-angle-double-right"></i>
      </NavPostLink>
    </div>
  )
}