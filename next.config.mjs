// next.config.mjs
export default {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.adfinityclarity.com" }],
        destination: "https://adfinityclarity.com/:path*",
        permanent: true,
      },
    ];
  },
};
