const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
    experimental: {
        serverActions: true
    }
});

module.exports = nextConfig;
