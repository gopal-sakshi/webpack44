# Development

(A) mode: 'development'
(B) use sourceMaps                      // for debugging
        devtool: 'inline-source-map'
(C) hassle to manually run npm run build every time you want to compile your code.
        webpack --watch             // watch all files within your dependency graph... 
        webpack-dev-server
        webpack-dev-middleware
-------------------------------------------------------------------------
# Production

The goals of development and production builds differ greatly. 

In development, we want 
- strong source mapping
- localhost server with live reloading or hot module replacement. 

In production we want
- minified bundles
- lighter weight source maps
- optimized assets to improve load time

(A) mode: 'production'                  // loads TerserPlugin   - for tree shaking ???
(B) NODE_ENV ===> system environment variable 
        Node.js exposes into running scripts. 
        used by convention to determine dev-vs-prod behavior by server tools, build scripts, client-side libraries
    process.env.NODE_ENV is NOT set to 'production' within the build script webpack.config.js
(C) Webpack v4+ will minify your code by default in production mode
(D) sourcemaps
        devtool: 'source-map',
        <!-- devtool: 'inline-source-map', -->              // NOT THIS
    sourcemaps = useful for debugging, running benchmark tests
    using inline-source-map ===> can increase the bundle size too much

-------------------------------------------------------------------------