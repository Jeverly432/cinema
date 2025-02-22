export function buildImageLoader() {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
        ],
    };
}
