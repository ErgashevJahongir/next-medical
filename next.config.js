//  /*@type {import('next').NextConfig}*
const nextConfig = {
    reactStrictMode: true,
};

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]',
                },
            },
        });
        return config;
    },
});

module.exports = nextConfig;

const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['www.atulpeters.com'],
    },
    compiler: {
        styledComponents: true,
    },
};
