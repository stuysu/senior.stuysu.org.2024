const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  basePath:  !debug ? '/stuyjucoc-frontend' : '',
  assetPrefix: !debug ? '/stuyjucoc-frontend' : '',
  images: {
    loader: "imgix",
    path: "",
  }
}
