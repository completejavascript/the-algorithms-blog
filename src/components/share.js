import React from "react";
import { rhythm } from "../utils/typography";
import 'font-awesome/css/font-awesome.css';
import './share.css';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

const textStyle = {
  marginLeft: `${rhythm(0.2)}`
}

export default ({ data }) => {
  return (
    <div style={{ display: `inline-block` }}>
      <FacebookShareButton
        url={data.url}
        qoute={data.title}
        className="share-btn facebook"
      >
        <div>
          <span><i className="fa fa-facebook"></i></span>
          <span style={textStyle}>Facebook</span>
        </div>
      </FacebookShareButton>

      <TwitterShareButton
        url={data.url}
        title={data.title}
        via={data.twitterHandle.split('@').join('')} hashtags={data.tags}
        className="share-btn twitter"
      >
        <div>
          <span><i className="fa fa-twitter"></i></span>
          <span style={textStyle}>Twitter</span>
        </div>
      </TwitterShareButton>

      <GooglePlusShareButton
        url={data.url}
        title={data.title}
        className="share-btn google"
      >
        <div>
          <span><i className="fa fa-google-plus"></i></span>
          <span style={textStyle}>Google+</span>
        </div>
      </GooglePlusShareButton>

      <LinkedinShareButton
        url={data.url}
        title={data.title}
        className="share-btn linkedin"
      >
        <div>
          <span><i className="fa fa-linkedin"></i></span>
          <span style={textStyle}>LinkedIn</span>
        </div>
      </LinkedinShareButton>
    </div>
  )
}