const path = require('path')
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['antd']);

const withPWA = require('next-pwa')
const withSass = require('@zeit/next-sass');



module.exports = withTM({
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals];
    }

    config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');

    return config
  },
});
module.exports = withPlugins([withTM], {
    // ...
});

module.exports = withSass({
  cssModule: true
})
//
module.exports = withPWA({
  pwa: {
    dest: 'public',
    skipWaiting: true,
    register: true,
    disable: false,
  },
  reactStrictMode: true,
})
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
}


module.exports = nextConfig
