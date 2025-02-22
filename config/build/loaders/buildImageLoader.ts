export function buildImageLoader() {
    return {
        test: /\.(png|jpe?g|gif|webp)$/i,
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
