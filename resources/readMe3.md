# source maps
- When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. 
- For example, if you bundle three source files (a.js, b.js, c.js) into one bundle (bundle.js) 
    and one of the source files contains an error, 
    the stack trace will point to bundle.js. 
- This isn't always helpful as you probably want to know exactly which source file the error came from.
- In order to make it easier to track down errors and warnings, JavaScript offers source maps, 
    which map your compiled code back to your original source code. 
- If an error originates from b.js, the source map will tell you exactly that.

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
