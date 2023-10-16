/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	images: {
		unoptimized: true,
	},
	staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;
