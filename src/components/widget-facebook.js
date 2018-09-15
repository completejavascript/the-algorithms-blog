import React from "react";
import WidgetContainer from "../components/widget-container";
import WidgetTitle from "../components/widget-title";
import FacebookProvider, { Page } from 'react-facebook';

export default props => {
  const { fbConfig } = props;
  const { fbPageId, fanpage } = fbConfig;
  
  return (
    <WidgetContainer>
      <WidgetTitle> Mạng xã hội </WidgetTitle>
      <FacebookProvider appId={fbPageId}>
        <Page
          href={fanpage}
          // dataWidth="100%"
          height="300px"
          // dataAdaptContainerWidth="true"
        />
      </FacebookProvider>
    </WidgetContainer>
  )
}