module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Blog posts collection (all blog post index.njk files under src/blogs/*/index.njk)
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/blogs/**/index.njk")
      .filter((item) => !item.inputPath.endsWith("src/blogs/index.njk"))
      .sort((a, b) => (b.date || 0) - (a.date || 0));
  });

  // Format date for sitemap <lastmod>
  eleventyConfig.addFilter("sitemapDate", (dateObj) => {
    const d = dateObj ? new Date(dateObj) : new Date();
    return d.toISOString().split("T")[0];
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    }
  };
};
