module.exports = {
  siteMetadata: {
    siteUrl: `https://thuattoan.phamvanlam.com`,
    title: `Algorithms Blog`,
    subtitle: `Chia sẻ về thuật toán và lời giải các bài toán cơ bản`,
    description: `Blog này được lập nên với mục đích chia sẻ những kiến thức và kinh nghiệm của bản thân về các thuật toán và lời giải các bài toán cơ bản trên các trang như spoj.com, acm.timus.ru,…`,
    keywords: `thuat-toan, thuattoan, algorithms, spoj`,
    fanpage: `https://www.facebook.com/Onluyenthuattoan/`,
    fbGroup: `https://www.facebook.com/groups/HoiDapThuatToanVN/`,
    email: 'lampv606@gmail.com',
    twitterHandle: `@CmpltJavaScript`,
    pageLength: 6,
    lang: `vi`,
    fbPageId: `250233488967049`,
    fbCommentId: `728566430818562`,
    fbId: `100013577851883`,
    siteLinks: [
      {
        text: "Lam Pham Blog", 
        link: "https://phamvanlam.com/",
      },
      {
        text: "Complete JavaScript", 
        link: "https://completejavascript.com/",
      },
    ],
  },
  pathPrefix: `/the-algorithms-blog`,
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: 'completejavascript',
              includeDefaultCss: true
            }
          },
          {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96543695-4",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};