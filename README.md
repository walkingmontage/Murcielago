# Murcielago
Setting up React/Redux/React-router for ES2015+ with Webpack-dev-middleware and Babel.

## Requirements
* nodejs ^6.2.0
* expressjs ^4.x

## Getting Start

```
$ npm install
```
 
* Development

    ```
    $ gulp
    ```

* Production
    
    ```
    $ pm2 start pm2.json
    ```

## Developer tools
####  1. webpack

We use `webpack-dev-middleware` + `webpack-hot-middleware` modules to support multiple modes to automatic refresh the page and update modules as “Hot Module Replacement” (HMR) 

#### 2. nodemon  

Restart server automaticly.

#### 3. gulp

Start the server and compiles react + redux + es2015 in development environment.

#### 4. pm2

Start the server in production environment

## Build System

#### Configuration
Default webpack configuration can be found in `~/server/config/` Here you'll be able to redefine your src and dist directories.adjust compilation settings, tweak your vendor dependencies, and more.

* `webpack.dev.config.js` is the webpack configuration file in development environment. Uses to compile modules as HMR mode in memory.

* `webpack.config.js` is the webpack configuration file output the compiled files which will be used in production environment.

* Building for production env
    
    ```
    $ gulp build
    ```
    
## Examples
Run gulp

```
$ gulp
```

and then:

* go to `localhost:1234/todo` to take a look at the react+redux example 

* go to `localhost:1234/react-router` to take a look at the react-router example
