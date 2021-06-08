const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({ pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'] });
