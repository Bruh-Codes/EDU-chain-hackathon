import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	webpack: (config) => {
		config.externals.push("pino-pretty", "lokijs", "encoding");
		return config;
	},
	outputFileTracingIncludes: {
		artifacts: ["../artifacts"],
	},
};

export default nextConfig;
