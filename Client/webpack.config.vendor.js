const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const extractCSS = new ExtractTextPlugin('vendor.css');

    const vendorConfig =  {
        stats: { modules: false },
        resolve: { extensions: [ '.js' ] },
        output: { 
            path: path.join(__dirname, 'dist'),
            publicPath: 'dist/',
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        module: {
            rules: [
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        {
                            loader: 'typings-for-css-modules-loader',
                            query: {
                                modules: true,
                                importLoaders: 1,
                                camelCase: true,
                                namedExport: true,
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            }
                        },
                        "sass-loader"
                    ]
                },
                { test: /\.css(\?|$)/, use: extractCSS.extract({ use: isDevBuild ? 'css-loader' : 'css-loader?minimize' }) }
            ]
        },
        entry: {
            vendor: [
                'bootstrap',
                'bootstrap/dist/css/bootstrap.css',
                'history',
                'react',
                'react-dom',
                'react-router-dom',
                'react-redux',
                'redux',
                'redux-thunk',
                'react-router-redux',
                'jquery'
            ]
        },
        plugins: [
            extractCSS,
            new webpack.DllPlugin({
                path: path.join(__dirname, 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            })
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    };

    return [vendorConfig];
};
