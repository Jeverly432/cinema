import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                compilerOptions: {
                    noEmit: false,
                },
            },
        },
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}