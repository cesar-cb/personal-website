/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import path from 'path'
import { URL } from 'url'

const __dirname = new URL('.', import.meta.url).pathname

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `
      @import "variables.scss";
      @import "functions.scss";
      @import "placeholders.scss";
    `,
  },
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts', 'middleware.ts'],
  rewrites: () => {
    return [
      {
        source: '/',
        destination: '/home',
      },
      {
        source: '/:type(projects|articles)',
        destination: '/posts/:type',
      },
      {
        source: '/:slug',
        destination: '/post/:slug',
      },
    ]
  },
}

export default nextConfig
