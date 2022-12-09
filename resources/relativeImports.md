# client side JavaScript ES6 imports.

`Module Specifiers`
- The browser does not understand Module Specifiers by default.
- ERROR: failed to resolve module specifier "gopal612-js-lib". relative references must start with either
    this error is referring to “relative references”. It is expecting a URL.
- Examples
    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
- To import modules client side using the Module Specifiers syntax, there are a few different steps involved
    In VSCode (or) Atom (or) other IDE ---> we dont see errors underlining our import statements
        The IDE will scan the node_modules folder using various rules and 
        attempt to auto link to the Module Specifier that you wrote in your import statements.
    But in browser... browser doesn’t have direct access to the file system on the server in order to traverse all the folders 
        and try all the methods of finding references that are involved during Module Resolution.
- A common approach to solving this problem in the browser is 
    to introduce a step that bundles all the required imports into one JavaScript file 
    to be used on the client side. 
    The client loads this JavaScript bundle & sets up all the module namespaces, into the browsers memory ready for use.
- The tool that is used is commonly called a bundler. 
    There are many bundlers that we can choose from to add to our projects (Webpack, Parcel, etc)
- 

`Relative Import References`
- blah
- Examples
    import * as THREE from '/build/three.module.js';
    import { OrbitControls } from '/jsm/controls/OrbitControls';
- Relative Import References use Uniform Recourse Locators (URL)

# Info
- We can use import maps which will allow us to use Module Specifiers in our client side JavaScript. 
    This is usually the case if we haven’t bundled our code using Webpack, Parcel

# Import Maps
- are extra header tags that you can add to your HTML source 
- to tell the browser what URL it can find a resource at, if encounters a specific Module Specifier.
- place the import map into the head section of your HTML code
- One major problem is that import maps are not yet fully supported by all browsers
- Syntax
    <script type="importmap">
        {
            "imports": {
                "nameOfImport1": "location-of-code",
                "nameOfImport2": "location-of-code"
            }
        }
    </script>
- For big/popular JS libraries
    vue js (and others) ====> the Js code is available online
        https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.37/vue.esm-browser.min.js
    for vue & react... we can give js code in <script> tag of index.html
- For custom JS libraries --> use unpkg
    Unpkg is a content delivery network (CDN) for any package in npmjs
    If you can npm install a package, you should be able to load it via unpkg
    If you can "npm install gopal612-js-lib" ====> you'are able to load it via unpkg
    Examples
        https://unpkg.com/browse/lodash-es@4.17.21/
        https://unpkg.com/browse/gopal612-js-lib@1.0.0/
        https://unpkg.com/browse/react@18.2.0/
    To view in browser.... there will be 'browse' in the path... but for importing .js code... dont use browse
        https://unpkg.com/lodash-es@4.17.21/startCase.js
        https://unpkg.com/gopal612-js-lib@1.0.0/index.js
        https://unpkg.com/browse/react@18.2.0/umd/react.development.js






