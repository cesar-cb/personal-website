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
      @import "placeholders.scss";
      @import "mixins.scss";
    `,
  },
}

export default nextConfig
