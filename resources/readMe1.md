Bundling code 
- combining & optimizing multiple modules into one or more production-ready bundles. 
- The bundle = end product of the entire bundling process.

webpack = a tool written by Tobias Koppers
https://github.com/sokra

----------------------------------------------------------------------------------------------------------------------

CleanWebpackPlugin
- clean up the dist directory before each new build


HTMLWebpackPlugin
- any time we change the output file name in our webpack.config.js file, 
    we also have to change that file name we reference in our script tag in our index.html file
- this plugin manages that for us
- remove the script tag in index.html
    see the plugins section in webpack.config.js

webpack-merge plugin 
- to manage shared code that multiple config files 

webpack.config.dev.ts
- we've specified the mode as development
- inline-source-map for our JavaScript files
- For dev server, content will be found in the dist directory.
- Use static instead as contentBase is deprecated in latest Webpack v5

webpack.config.prod.ts
- mode is production
- source-map option for source maps
-----------------------------------------------------------------------------

# loaders
webpack loaders

