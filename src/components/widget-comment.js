import React from "react";
import { rhythm } from "../utils/typography";
import { DiscussionEmbed } from 'disqus-react';

export default props => {
  const { disqusShortname, disqusConfig } = props;

  return (
    <div style={{marginTop: `${rhythm(1/4)}`}}>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}