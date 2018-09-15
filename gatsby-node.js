const path = require(`path`);
const slug = require('slug');
const createPaginatedPages = require("gatsby-paginate");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `File`) {
    const parsedFilePath = path.parse(node.absolutePath);
    const slug = `/${parsedFilePath.dir.split("---")[1]}/`;
    createNodeField({ node, name: `slug`, value: slug });
  } else if (
    node.internal.type === `MarkdownRemark` &&
    typeof node.slug === "undefined"
  ) {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: `slug`,
      value: fileNode.fields.slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                categories
                tags
              }
              fields {
                slug
              }
              excerpt
              timeToRead
            }
          }
        }
        site {
          siteMetadata {
            siteUrl
            pageLength
            title
            subtitle
            description
            keywords
          }
        }
      }
    `).then(result => {
        const edges = result.data.allMarkdownRemark.edges;
        let tags = [];
        let categories = [];

        // Create blog-post pages 
        edges.forEach(({ node }, idx) => {
          const index = Number.parseInt(idx);
          const prevSlug = index > 0 ? edges[index - 1].node.fields.slug : "";
          const nextSlug = index < edges.length - 1 ? edges[index + 1].node.fields.slug : "";

          // Collect all tag, category and ignore duplicated
          tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
          categories = Array.from(new Set([...categories, ...node.frontmatter.categories]));

          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
              prevSlug: prevSlug,
              nextSlug: nextSlug
            },
          })
        });

        //createPaginatedPages for homepage
        createPaginatedPages({
          edges: edges,
          createPage: createPage,
          pageTemplate: "src/templates/index.js",
          pageLength: result.data.site.siteMetadata.pageLength, // This is optional and defaults to 10 if not used
          pathPrefix: "", // This is optional and defaults to an empty string if not used
          context: {} // This is optional and defaults to an empty object if not used
        });

        // createPaginatedPages for categories pages
        categories.forEach(category => {
          // Filter to get all node related to the category
          const categoryEdges = edges.filter(({ node }) => {
            return node.frontmatter.categories.includes(category);
          });

          createPaginatedPages({
            edges: categoryEdges,
            createPage: createPage,
            pageTemplate: "src/templates/categories.js",
            pageLength: result.data.site.siteMetadata.pageLength, // This is optional and defaults to 10 if not used
            pathPrefix: `category/${slug(category).toLowerCase()}`,
            buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
            context: {
              category,
            } // This is optional and defaults to an empty object if not used
          });
        });

        // Create tags pages
        tags.forEach(tag => {
          // Filter to get all node related to the category
          const tagEdges = edges.filter(({ node }) => {
            return node.frontmatter.tags.includes(tag);
          });

          createPaginatedPages({
            edges: tagEdges,
            createPage: createPage,
            pageTemplate: "src/templates/tags.js",
            pageLength: result.data.site.siteMetadata.pageLength, // This is optional and defaults to 10 if not used
            pathPrefix: `tag/${slug(tag).toLowerCase()}`,
            buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
            context: {
              tag,
            } // This is optional and defaults to an empty object if not used
          });
        });

        resolve()
      })
  })
};