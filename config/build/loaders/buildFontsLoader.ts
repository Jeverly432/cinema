export function buildFontsLoader() {
    return {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
    };
}
