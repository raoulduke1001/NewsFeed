const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
                extensions: ['.js', '.jsx']
            },
            use: {
                loader: "babel-loader"
            }
        }]
    }
};