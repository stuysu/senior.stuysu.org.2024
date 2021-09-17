module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    loader: "imgix",
    path: "",
  },
  trailingSlash: true,
}
