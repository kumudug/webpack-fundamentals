module.exports = {
    entry: ["./utils", "./app.js"],
    output: {
        filename: "bundle.js"
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