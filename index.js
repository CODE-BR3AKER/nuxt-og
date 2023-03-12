const generateOGImage = require('./lib/generate-og-image');

module.exports = function (moduleOptions) {
  // ...
  this.nuxt.hook('generate:routes', async (routes) => {
    const contentRoutes = routes.filter((route) =>
      route.route.startsWith('/content/')
    );

    for (const { route } of contentRoutes) {
      const contentSlug = route.replace('/content/', '').replace('.md', '');
      const ogImageSrc = await generateOGImage(contentSlug);
      this.addStaticFile({
        path: `/og-images/${contentSlug}.png`,
        generate: true,
        content: Buffer.from(
          ogImageSrc.replace(/^data:image\/\w+;base64,/, ''),
          'base64'
        ),
      });
    }
  });
};
