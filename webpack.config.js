const path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};