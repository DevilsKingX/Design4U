/** @type {import('next').NextConfig} */
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Copy files from the "public" folder to the "media" folder in the output directory
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './public',
              to: './_next/static/media',
              globOptions: {
                ignore: ['**/*.html'],
              },
            },
          ],
        })
      );
    }

    return config;
  },
};