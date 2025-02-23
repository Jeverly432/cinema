import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildFontsLoader } from "../build/loaders/buildFontsLoader";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve?.modules?.push(paths.src);

    config.resolve?.extensions?.push(".ts", ".tsx");

    if (config.module?.rules) {
        const rules = config.module.rules.filter(
            (rule): rule is RuleSetRule => typeof rule === "object" && rule !== null,
        );

        // eslint-disable-next-line no-param-reassign
        config.module.rules = rules.map((rule: RuleSetRule) => {
            if (rule.test && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    config.module?.rules?.unshift({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    config.module?.rules?.push(buildCssLoader(true));
    return config;
};
