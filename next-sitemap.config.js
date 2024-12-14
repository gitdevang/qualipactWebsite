module.exports = {
    siteUrl: "https://qualipact.com",
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.9,
    additionalPaths: async (config) => [
      await config.transform(config, "/", { changefreq: "daily" }),
      await config.transform(config, "/services", { changefreq: "monthly" }),
      await config.transform(config, "/about", { changefreq: "monthly" }),
      await config.transform(config, "/contact", { changefreq: "monthly" }),
      await config.transform(config, "/privacy-policy", { changefreq: "monthly" }),
      await config.transform(config, "/terms-conditions", { changefreq: "monthly" }),
    ],
  };
  