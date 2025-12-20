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
			{
				protocol: "https",
				hostname: "www.melp.us",
				pathname: "/blog/wp-content/uploads/**",
			},
			{
				protocol: "https",
				hostname: "melp.us",
				pathname: "/blog/wp-content/uploads/**",
			},
		],
	},
};

export default nextConfig;
