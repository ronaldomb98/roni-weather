import { config } from "./configuration";
import { merge } from 'webpack-merge';
import { WebpackCommonConfig } from "./common";
import { Configuration, WebpackOptionsNormalized } from "webpack";

const entry = [`${config.src}/index.tsx`]

const devServer: WebpackOptionsNormalized['devServer'] = {
    open: true,
    compress: false,
    port: config.port,
    host: config.hostName,
    hot: true,
    historyApiFallback: true,
    client: {
        progress: true,
    },
    static: [
        {
            watch: true,
            directory: config.dist,
        },
    ],
};

const webpackConfig: Partial<WebpackOptionsNormalized | Configuration> = {
    entry,
    devServer,
    optimization: {
        runtimeChunk: 'single'
    },
    devtool: 'cheap-module-source-map',
};

export const WebpackDevConfig = merge<Partial<WebpackOptionsNormalized | Configuration>>(WebpackCommonConfig, webpackConfig);