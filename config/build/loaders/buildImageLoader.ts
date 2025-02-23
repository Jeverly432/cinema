export function buildImageLoader() {
    return {
        test: /\.(png|jpe?g|gif|webp|woff|woff2)$/i,
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
