const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // Here you can set your env variables.
                SERVER_URL: JSON.stringify(process.env.SERVER_URL)
            }
        })
    ]
}