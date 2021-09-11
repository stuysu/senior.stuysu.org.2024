// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  // // basePath: process.env.NODE_ENV!=="development"?"":"/stuyjucoc-frontend",
  // assetPrefix: isProd ? 'https://cdn.mydomain.com/' : '',
  basePath: '/stuyjucoc-frontend',
  assetPrefix: '/stuyjucoc-frontend',
  images: {
    loader: "imgix",
    path: "",
  }
}
