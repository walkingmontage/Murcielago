# Murcielago
Setting up React/Redux/React-router for ES2015+ with Webpack-dev-middleware and Babel.

## Requirements
* nodejs ^6.2.0

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
######  1. webpack-dev-middleware + webpack-hot-middleware

The webpack-dev-middleware module supports multiple modes to automatic refresh the page. And the webpack-hot-middleware module supports to update modules as “Hot Module Replacement” (HMR) 

###### 2. nodemon  

Restart server automaticly.

###### 3. gulp

Start the server and compiles react + redux + es2015 in development environment.

###### 4. pm2

Start the server in production environment

## Build System

1. ~/server/config/webpack.dev.config.js is the webpack configuration file in development environment. Uses to compile modules as HMR mode in memory.

2. ~/server/config/webpack.dev.js is the webpack configuration file output the compiled files which will be used in production environment.

3. How to build file for production env
    
    ```
    $ gulp build
    ```