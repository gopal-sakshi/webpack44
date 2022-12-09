Errors


# Error 01

Cannot use import statement outside a module

If NodeJs ---> type="module" in package.json
If Broswer ---> 
    add type="module" at the place where we imported js file
-------------------------------------------------------------------
# Error 02

If I opened index3.html in a browser... I got this error
Access to script at 'file:///home/vsspl/Desktop/frontEnd/webpack44/src/index3.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
index3.html:17          GET file:///home/vsspl/Desktop/frontEnd/webpack44/src/index3.js net::ERR_FAILED

Solution: 

Looks like you're trying to open the web-page locally (via file:// protocol) 
- ie by double clicking the .html file. 
- Unfortunately modules only work via HTTP(s), so all you need to do is use a local web server.
    if you want to use "import statement in js files" ===> then, you have to mention  <script type="module" ... >
    then, you'll get CORS error
- Option
    run a localserver and serve the index.html file from there
- Other option: use CORS disabled mode
-------------------------------------------------------------------

# Error 03

failed to resolve module specifier "gopal612-js-lib". relative references must start with either
- see this 'relativeImports.md'


# Error 04
The requested module '@gopal612-js-lib' does not provide an export named 'printPrimes'


# Error 05
type="module" ReferenceError
Variables inside modules are scoped to those modules.
They aren't designed to create global variables