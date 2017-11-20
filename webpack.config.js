
module.exports = {
    entry: './src/client/app/js/main.js', 
    output: {
        filename: '[name].bundle.js', 
        path: __dirname, 
        publicPath: __dirname
    },
    devServer: {
        open: true, // to open the local server in browser
        contentBase: __dirname + '/src/client/app',
    }
};