const path = require("path");
const isProd = process.env.NODE_ENV === 'production'
const base = '/Daniel-WANG-Portfolio'

module.exports = {
  basePath: isProd ? base : '',
  assetPrefix: isProd ? base : '',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
  output: "export",
  reactStrictMode: true,
};
