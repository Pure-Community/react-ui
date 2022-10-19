const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    entry: './src/main.ts',
    mode: 'production',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                sourceMap: true,
                                includePaths: [path.resolve(__dirname, './src/styles/')],
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [new BundleAnalyzerPlugin()],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'umd',
        // pathinfo: false,
    },
    // optimization: {
    //     removeAvailableModules: false,
    //     removeEmptyChunks: false,
    //     splitChunks: false,
    //     runtimeChunk: true,
    // },
    externals: {
        react: 'react',
    },
}
