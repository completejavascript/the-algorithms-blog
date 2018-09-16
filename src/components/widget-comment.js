import React from "react";
import { rhythm } from "../utils/typography";
import FacebookProvider, { Comments } from 'react-facebook';

export default props => {
  const { config } = props;
  const { fbCommentId, url } = config;

  return (
    <div style={{ marginTop: `${rhythm(1 / 4)}` }}>
      <FacebookProvider appId={`${fbCommentId}`}>
        <Comments href={`${url}`} width={`100%`}/>
      </FacebookProvider>
    </div>
  )
}