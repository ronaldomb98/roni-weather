import { Configuration } from "webpack";
import { config } from "./configuration";
import { fonts, scripts, styles, svg } from "./modules";
import { cleanWebpackPlugin, envVariablesPlugin, htmlWebpackPlugin, nodePolyfillPlugin } from "./plugins";

const output: Configuration['output'] = {
    publicPath: 'auto',
    path: config.dist,
    filename: config.scripts,
};

const modules: Configuration['module'] = {
    rules: [styles, fonts, scripts, svg],
};

const plugins: Configuration['plugins'] = [
    htmlWebpackPlugin,
    cleanWebpackPlugin,
    envVariablesPlugin,
    nodePolyfillPlugin
];

const resolve: Configuration['resolve'] = {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
        "@modules": `${config.src}/modules`,
        "@assets": `${config.src}/assets`,
    }
}

export const WebpackCommonConfig: Configuration = {
    output,
    plugins,
    resolve,
    module: modules,
    context: __dirname,
    mode: config.isDev ? 'development' : 'production',
};