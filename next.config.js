const path = require("path");
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? "/Daniel-WANG-Portfolio" : "",
  assetPrefix: isProd ? "/Daniel-WANG-Portfolio/" : "",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
  output: "export",
  reactStrictMode: true,
};
