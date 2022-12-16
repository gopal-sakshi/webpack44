# Tree shaking
- dead-code elimination. 
- It relies on the static structure of ES2015 module syntax, i.e. import and export

`unUsedExports`: true           // webpack.config.js
`sideEffects`: false            // package.json

`sideEffects`
- this is with respect to JavaScript
- Any operation that is not directly related to the final output of the function is called a Side Effect
----------------------------------------------------------------------------

Tree-shaking
- works effectively ONLY if webpack knows about 
    side effects in your code
    side effects in the packages you make use of.

A side effect
- in an ECMAScript module context
- is code that performs some externally-visible behaviour 
- ie behaviour which is visible outside the module when the module is loaded


In ECMAScript module context

<!-- *************** SIDE EFFECT CODE ************************ -->

``` ts
import { registerThing } from 'thing-registry';
const store = registerThing( THING_KEY, { /* ... */ } );
```

registerThing() function is called as soon as module is imported
so, this module is doing some externally visible behaviour
examples of sideEffects
- setting globals on window
- adding browser behaviour through polyfills.
- doing externally visible behaviour ===> affecting stuff in another module
<!-- *************************************************** -->



<!-- ***************** NO SIDE EFFECT ******************************** -->
import { registerThing } from 'thing-registry';
 
export function init() {
  const store = registerThing( THING_KEY, { /* ... */ } );
}
init() doesnt get called on module load; so no longer a sideEffect

let localVariable = [];                 // declare a variable (not a sideEffect)
localVariable.push(registerThing)       // performing any modification at the top level
                                            // that only affects the current module isn’t a side effect either
                                        

<!-- *************************************************** -->


Most modern bundlers implement tree-shaking
- where unused code is removed from the final bundles, as it’s not necessary. 
- This becomes important in libraries that offer a lot of different functionality
    since consumers of that library may only be using a small portion of it
    and don’t want their bundles to be larger than necessary.
- side effects are `code that runs simply by virtue of importing a module`
    has an external influence of some sort. 
    This means that the code cannot be tree-shaken away because it needs to run

{
  "name": "package",
  "sideEffects": [
    "!(dist/(components|utils)/**)"
  ]
}

the above code tells the bundler that 
- anything outside the components & utils directories contains side effects
- everything in components & utils can be tree-shaken without side effect concerns
---------------------------------------------------------------------------------------

Tell webpack that a function call is side-effect-free (pure) 
- by using the /*#__PURE__*/ annotation. 
- It can be put in front of function calls to mark them as side-effect-free

ModuleConcatenationPlugin is needed for the tree shaking to work. 
- It is added by mode: 'production'
- If mode: 'development' =========> manually add ModuleConcatenationPlugin

