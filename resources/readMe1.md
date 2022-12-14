Bundling code 
- combining & optimizing multiple modules into one or more production-ready bundles. 
- The bundle = end product of the entire bundling process.

webpack = a tool written by Tobias Koppers
https://github.com/sokra

https://www.freecodecamp.org/news/creating-a-production-ready-webpack-4-config-from-scratch/
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
Starting with version 5 of webpack-merge
- the merge function moved to a named export instead of being the default export.
- You must destructure the merge function from the package import:
-----------------------------------------------------------------------------
# loaders
- webpack loaders = help webpack know how to understand and load different file types
- style-loader
    injects the CSS into the DOM. 
    By default, style-loader takes the CSS it encounters and adds it to the DOM inside a style tag.
- css-loader
    interprets & resolves imported CSS files that you reference in your JavaScript
- In module/rules section
    test property = regex that webpack checks against the file name.
    use property = tells webpack what loader or loaders to use to handle files matching the criteria. 
    Note that the order here matters!!! 
    - Webpack loaders are read from right to left. 
    - So first the css-loader will be applied, and then the style-loader will be applied.

Other loaders
- there's a loader for everything imaginable! 
- file-loader (or) url-loader ====> for loading images and other assets. 
- sass-loader =====> convert Sass/SCSS files to CSS before piping that output to css-loader & style-loader
- babel-loader
    Babel is a JavaScript compiler that can turn ES6+ code into ES5 code.
- Support for JSON is actually built-in, similar to NodeJS, meaning import Data from './data.json' will work by default. 
- To import CSVs, TSVs, and XML =====> use the csv-loader & xml-loader


style-loader takes CSS and places it in a style tag in your HTML. 
Because of that, there's a brief period of time in which the style tag hasn't been appended yet!
Rather than injecting CSS into our HTML as style tags
- we can use the MiniCssExtractPlugin to generate separate CSS files for us. 
- We'll use this in our production config while still just using style-loader in our development config.


# Cache Busting
- To help the browser understand when a file has changed!
- Your browser tries to be helpful by caching files it has seen before. 
    For example, if you've visited a website, and your browser had to download assets like JS, CSS, images
    your browser caches those files so that it doesn't have to request them from the server again.
    So, if you visit the site again, your browser can use the cached files instead of requesting them again, so you get a faster page load time and a better experience.
- So, what's the problem here? Imagine if we had a file called main.js used in our app. 
    Then, a user visits your app and their browser caches the main.js file.
    Now, at some later point in time, you've released new code for your app. 
    The contents of the main.js file have changed. 
- But, when this same user visits your app again, 
    the browser sees that it needs a main.js file, 
    notes that it has a cached main.js file, and just uses the cached version. 
    The user doesn't get your new code

a new content_hash is generated only when any of the source files change
otherwise   `main.2c66715bc7ef39007e0c.js` will remain `main.2c66715bc7ef39007e0c.js`
try running npm run prod22 again & again without changing any files


# Minifying CSS
- We're already minifying our JavaScript for the production build, but we're not minifying our CSS yet
- optimize-css-assets-webpack-plugin
    unable to resolve dependency tree...
    so, its recommended to use `css-minimizer-webpack-plugin` for webpack v5
- Webpack includes `webpack-terser-plugin` by default in order to minify the .js files