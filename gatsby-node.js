/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// If a string field value looks like a file path, then Gatsby infer File as the
// field’s type - https://www.gatsbyjs.org/docs/schema-gql-type/#file-types
// We want to prevent this because Stackbit treats all its fields as they were
// declared in frontmatter and stackbit.yaml
// If you want to enable Gatsby's automatic File type infer, then remove
// following lines and make sure to update all graphql queries where infer might
// happen.
const isFileModule = require("gatsby/dist/schema/infer/is-file");
isFileModule.isFile = function shouldInfer() {
    return false;
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'babel-runtime/helpers/inherits': require.resolve(
          'babel-runtime/helpers/inherits'
        ),
      },
    },
  });
};