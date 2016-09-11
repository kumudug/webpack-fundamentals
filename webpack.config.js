var path = require('path'); //built in module in node
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js'), //sets a relative root directory for entry key
    entry: ["./app"],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/', //for webpack-dev-server. it will serve build/js folder into the public path
        filename: "bundle.js"
    },
    plugins: [
        new extractTextPlugin("styles.css")
    ],
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
                loader: extractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader") //name of loader. check the package.json. This is gonna first run style-loader in css files and then it will run css-loader
            },
            {
                test: /\.less$/, //what files to run through the loader
                exclude: /node_modules/,
                loader: extractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader") //name of loader. check the package.json. This is gonna first run style-loader in css files and then it will run css-loader
            },
            {
                test: /\.(png|jpg|ttf|eot)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}