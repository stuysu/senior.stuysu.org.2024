/** @type {import('next').NextConfig} */
const repo = 'senior.stuysu.org'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath
};

module.exports = nextConfig;
