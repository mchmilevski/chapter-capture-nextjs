/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'booksblog.s3.eu-north-1.amazonaws.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'booksblog.s3.amazonaws.com',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;

