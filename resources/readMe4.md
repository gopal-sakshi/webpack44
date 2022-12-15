# Authoring a Library

webpack-numbers
-  convert the numbers 1 through 5 
    2 to 'two'
---------------------------------------------------------------------------------------------

we exposed the entry point as webpackNumbers so users can use it through script tag:

<script src="https://example.org/webpack-numbers.js"></script>
<script>
  window.webpackNumbers.wordToNum('Five');
</script>

However it only works when it's referenced through script tag
- it can't be used in other environments like CommonJS, AMD, Node.js


If you inspect the webpack_lib23_num2word.js file
- notice that lodash has been bundled along with your code. 
- but we prefer to treat lodash as a peer dependency. 
    Meaning that the consumer should already have lodash installed. 
    Hence you would want to give up control of this external library to the consumer of your library.
- use `externals` configuration
- 