var path = require('path'); //built in module in node

module.exports = {
    context: path.resolve('js'), //sets a relative root directory for entry key
    entry: ["./app"],
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
                test: /\.css$/, //what files to run through the loader
                exclude: /node_modules/,
                loader: "style-loader!css-loader" //name of loader. check the package.json. This is gonna first run style-loader in css files and then it will run css-loader
            },
            {
                test: /\.less$/, //what files to run through the loader
                exclude: /node_modules/,
                loader: "style-loader!css-loader!less-loader" //name of loader. check the package.json. This is gonna first run style-loader in css files and then it will run css-loader
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}