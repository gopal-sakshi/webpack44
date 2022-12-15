# source maps
- When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. 
- For example, if you bundle three source files (a.js, b.js, c.js) into one bundle (bundle.js) 
    and one of the source files contains an error, 
    the stack trace will point to bundle.js. 
- This isn't always helpful as you probably want to know exactly which source file the error came from.
- In order to make it easier to track down errors and warnings, JavaScript offers source maps, 
    which map your compiled code back to your original source code. 
- If an error originates from b.js, the source map will tell you exactly that.

# source maps2
- `JS sources executed by the browser` are transformed from `original JS sources written by a developer`
- For example ===> 
    sources are often combined and minified to make delivering them from the server more efficient.
    JavaScript running in a page is machine-generated, as when compiled from a language like TypeScript
- It’s much easier to debug the original source
    rather than the source in the transformed state that the browser has downloaded. 
- A source map is a file that maps from the transformed source to the original source
    enabling the browser to reconstruct the original source 
    and present the reconstructed original in the debugger.
- To enable the debugger to work with a source map, you must:
    generate the source map
    include a comment in the transformed file, that points to the source map. 
    comment’s syntax ===> //# sourceMappingURL=http://example.com/path/to/your/sourcemap.map



npm run start22
- you'll have
    index.6641dxxxx.js                      // this is a merger of index.js, print23.js, lodash functions
    module1.e9e5aexxxx.js
- we deliberately introduced error in print23.js
- click the button 'click me & check console' ====> you'll see error coming from print23.js
- try the same thing without devtool: inline-source-map
    even though its commented ===> still console showed error coming from print23.js & not index6641dxxxx.js
-----------------------------------------------------------------------------------------------------------------------

# server

webpack-dev-server serves bundled files from the directory defined in output.path
files will be available under http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]


webpack-dev-middleware
- is a wrapper that will emit files processed by webpack to a server. 
- This is used in webpack-dev-server internally
    however it's available as a separate package to allow more custom setups if desired. 
------------------------------------------------------------- 
entry dependencies ====> generate shared.module.js
    runtime.bundle.js file generated besides 
    shared.bundle.js
    index.bundle.js
    module1.bundle.js
see `entryDependencies1.png`

Although using multiple entry points per page is allowed in webpack, 
it should be avoided when possible 
Instead use, entry point with multiple imports
    entry: { 
        page: ['./analytics', './app']
    }


splitChunks
- with optimization.splitChunks
    duplicate dependency should be removed from our 
        index.bundle.js
        module1.bundle.js. 
    The plugin should notice that we've separated lodash out to a separate chunk 
        remove the dead weight from our main bundle


the SplitChunksPlugin
- used to split modules out into separate bundles. 
- optimization feature to split runtime code into a separate chunk 
    runtime.f343xxxx.js 
    `optimization.runtimeChunk : single`              // to create a single runtime bundle for all chunks
- a new <runtime.js> will be generated for all 3rd party libraries
    
generate vendor.js    
- good practice to extract third-party libraries (lodash, react) as separate vendor chunk
    as they are less likely to change than our local source code
- using the cacheGroups option of the SplitChunksPlugin
- `npm run prod22`
    see hashes of each file ===> <vendors23.js_isntUpdated1.png>
- make some small changes in index_without_loaders.js
    notice that only index `hash` is changed
    vendors23.js ===> hash is unchanged... so, browser can cache it
- add/import a new module in index_without_loaders.js


The main bundle changed                 because of its new content.
The vendor bundle changed               because its module.id was changed.
the runtime bundle changed              because it now contains a reference to a new module.

Use optimization.moduleIds with 'deterministic' option:
- our vendor hash should stay consistent between builds:



------------------------------------------------------------- 


use either of these

npm run start22 (or) 

npm run prod22 (or) 
- must access via express server 
- npm run server22, localhost:9989
- uses webpack.config.dev.js

npm run prod23 
- direct attack ---> uses webpack.config.js
-------------------------------------------------------------