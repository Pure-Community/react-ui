const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
                exclude: /node_modules/,
            },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //         // Creates `style` nodes from JS strings
            //         'style-loader',
            //         // Translates CSS into CommonJS
            //         'css-loader',
            //         // Compiles Sass to CSS
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sassOptions: {
            //                     sourceMap: true,
            //                     includePaths: [path.resolve(__dirname, './src/styles/')],
            //                 },
            //             },
            //         },
            //     ],
            // },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: true,
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },
    output: {
        pathinfo: false,
    },
}
