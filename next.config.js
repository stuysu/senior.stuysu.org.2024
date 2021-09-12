const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: isProd ? '/stuyjucoc-frontend' : '',
  images: {
    loader: "imgix",
    path: "",
  }
}
