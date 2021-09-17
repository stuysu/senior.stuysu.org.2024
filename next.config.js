const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  basePath: procecss.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    loader: "imgix",
    path: "",
  },
  trailingSlash: true,
}
