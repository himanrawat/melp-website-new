import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.gstatic.com",
				pathname: "/images/**",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				pathname: "/wikipedia/**",
			},
			{
				protocol: "https",
				hostname: "cdn.worldvectorlogo.com",
				pathname: "/logos/**",
			},
		],
	},
};

export default nextConfig;
