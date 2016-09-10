var path = require('path'); //built in module in node

module.exports = {
    context: path.resolve('js'), //sets a relative root directory for entry key
    entry: ["./utils", "./app"],
    output: {
        path: path.resolve('build/js'),
        publicPath: '/public/assets/js', //for webpack-dev-server. it will serve build/js folder into the public path
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public' //any requests to the root will come from the folder public
    },
    watch: true,
    //add support for babel
    module: {
        loaders: [
            {
                test: /\.es6$/, //what files to run through the loader
                exclude: /node_modules/,
                loader: "babel-loader" //name of loader. check the package.json
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}