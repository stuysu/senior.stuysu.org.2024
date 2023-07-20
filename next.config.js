/** @type {import('next').NextConfig} */
const repo = 'senior.stuysu.org'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath
};

module.exports = nextConfig;
