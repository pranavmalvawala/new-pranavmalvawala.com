/** @type {import('next').NextConfig} */
module.exports = {
    swcMinify: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    reactStrictMode: true,
    images: {
        domains: [
            "dev.to",
            "blog.trishalim.com",
        ],
    },
};
