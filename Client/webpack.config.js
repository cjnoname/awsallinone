const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const merge = require('webpack-merge');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const clientBundleOutputDir = './dist';
    const config = {
        stats: { modules: false },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        entry: { 'main-client': './src/index.tsx' },
        module: {
            rules: [
                { test: /\.tsx?$/, include: /src/, use: 'awesome-typescript-loader?silent=true' },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
                { test: /\.css$/, use: ExtractTextPlugin.extract({ use: isDevBuild ? 'css-loader' : 'css-loader?minimize' }) },
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
                }
            ]
        },
        output: {
            filename: '[name].js',
            publicPath: 'dist/',
            path: path.join(__dirname, clientBundleOutputDir)
        },
        plugins: [
            new ExtractTextPlugin('site.css'),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./dist/vendor-manifest.json')
            }),
            new CheckerPlugin()
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
                // Plugins that apply in production builds only
                new webpack.optimize.UglifyJsPlugin()
            ]),
        devServer: {
            proxy: [{
                context: ["/api"],
                target: "http://localhost:5000",
                open: true,
                openPage: 'http://localhost:3000'
            }]
        }
    };

    return [config];
};