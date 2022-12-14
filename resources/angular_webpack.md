The Angular build process 
- uses webpack behind the scenes 
- to transpile TypeScript to JavaScript
- transform Sass files to CSS
- and other tasks

Why webpack
- Browsers have very limited support for JavaScript modules. 
- In practice, any JavaScript application loaded into the browser 
    should be contained in a single source file. 
- On the other hand, it is good software development practice 
    to separate out code into modules contained in separate files. 
- When deploying a JavaScript application for the browser, 
    the modules must then be built into a single source file. 
- Bundling multiple modules into a single file is the main purpose of webpack.

---------------------------------------------------------------------------
Webpack is not limited to simply bundling source files. 
Because it can support a multitude of plugins, it can perform many additional tasks. 
Webpack module loaders are able to parse different file types. 
- So, Angular TypeScript files can use the import statement to import stylesheet files. 
- Usually, webpack is hidden behind the Angular command-line tool. 
- But in some cases, it may be necessary to tweak the configuration of webpack when building an Angular application.

In earlier versions of Angular, it was possible to eject the webpack configuration and modify it directly. 
With Angular 8, access to the base configuration has been disabled. 
But it is still possible to extend the webpack configuration and add additional loaders or configuration options. 
---------------------------------------------------------------------------

how to create an Angular 8 application and tweak the webpack configuration.

