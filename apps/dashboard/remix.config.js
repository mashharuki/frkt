/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  server: './server.ts',
  serverConditions: ['workerd', 'worker', 'browser'],
  serverDependenciesToBundle: [
    'lucia',
    'lucia/middleware',
    'lucia/polyfill/node',
    '@lucia-auth/adapter-sqlite',
    // bundle everything except the virtual module for the static content manifest provided by wrangler
    /^(?!.*\b__STATIC_CONTENT_MANIFEST\b).*$/,
  ],
  serverMainFields: ['browser', 'module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  tailwind: true,
  postcss: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  watchPaths: [
    '../../packages/common/components/**/*',
    '../../packages/common/hooks/**/*',
    '../../packages/common/lib/**/*',
  ],
}
