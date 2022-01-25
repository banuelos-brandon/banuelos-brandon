module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    return {
        passthroughFileCopy: true,
        dir: {
            input: "index.html",
            output: "_site",
            includes: "includes",
        }
    }
}