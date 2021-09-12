const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  basePath:  !debug ? 'https://pserb.github.io/stuyjucoc-frontend/' : '',
  assetPrefix: !debug ? 'https://pserb.github.io/stuyjucoc-frontend/' : '',
  images: {
    loader: "imgix",
    path: "",
  }
}
