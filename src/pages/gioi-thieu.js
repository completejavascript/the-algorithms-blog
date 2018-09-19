import React from "react";
import { rhythm } from "../utils/typography";
import Helmet from "react-helmet";
import profile from "../images/profile_phamvanlam-com-co-dien.jpg";
import WidgetContainer from "../components/widget-container";
import LazyImage from "../components/lazy-image";
import placeHolder from "../images/place-holder.png";

export default ({ data }) => {
  const seoTitle = `Giới thiệu - ${data.site.siteMetadata.title}`;
  const url = `${data.site.siteMetadata.siteUrl}/gioi-thieu/`;

  return (
    <article>
      <Helmet
        title={seoTitle}
        meta={[
          { name: 'description', content: `${data.site.siteMetadata.description}` },
          { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
        ]}
      />

      <h1>Giới thiệu</h1>
      <WidgetContainer>
        <p>
          Xin chào các bạn! Tôi là Phạm Văn Lâm, cựu sinh viên Đại học Bách Khoa Hà Nội chuyên ngành Điện tử – Viễn thông. Hiện tại, tôi đang làm việc tại SVMC – trung tâm nghiên cứu và phát triển điện thoại di động Samsung tại Việt Nam.
        </p>
        <div style={{ display: `flex`, justifyContent: `center` }}>

          <LazyImage
            placeHolder={placeHolder}
            src={profile}
            width={`252`}
            height={`auto`}
            effect={"opacity"}
            alt={`lam pham profile image`}
            keepRatio
          />
        </div>
        <p>
          Tôi lập nên trang web này với mục đích chia sẻ những kiến thức và kinh nghiệm của bản thân về các thuật toán và lời giải các bài toán cơ bản mà tôi đã thực hành trên các trang như spoj.com, acm.timus.ru,...
        </p>
        <p>
          Rất mong nhận được sự ủng hộ và đóng góp ý kiến của các bạn để trang web ngày càng hoàn thiện hơn. Qua đó, tôi có thêm nhiều động lực để phát triển trang web này.
        </p>
        <p>
          Xin chân thành cám ơn!
        </p>
        <p>
          Phạm Văn Lâm.
        </p>
      </WidgetContainer>
    </article>
  )
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        siteUrl
        title
        subtitle
        description
        keywords
      }
    }
  }
`