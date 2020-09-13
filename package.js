Package.describe({
  name: 'mdg:seo-jirikrepl',
  summary: 'Provide SEO support for enabled apps.',
  version: '3.2.2',
  git: 'https://github.com/jirikrepl/galaxy-seo-package',
});

Npm.depends({
  'prerender-node': '3.2.5',
});

Package.onUse(function packageConfiguration(api) {
  api.use(['modules','webapp'], 'server');
  api.export(['PrerenderIO'], 'server');
  api.versionsFrom('1.4');  // prerender-node requires Node 4
  api.mainModule('server/prerender.js', 'server');
});
