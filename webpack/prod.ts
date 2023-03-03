import { merge } from 'webpack-merge';
import { WebpackCommonConfig } from "./common";
import { Configuration, WebpackOptionsNormalized } from "webpack";
import { cleanWebpackPlugin, cssMinimizerWebpackPlugin, miniCssExtractPlugin, terserWebpackPlugin } from "./plugins";
import { config } from './configuration';

const entry = [`${config.src}/index.tsx`];

const plugins = [cleanWebpackPlugin, miniCssExtractPlugin];

const optimization: Configuration['optimization'] = {
    minimize: true,
    minimizer: [
        terserWebpackPlugin,
        cssMinimizerWebpackPlugin
    ]
}

const performance: Configuration['performance'] = {
    hints: 'error',
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
}

const webpackConfig: Partial<WebpackOptionsNormalized | Configuration> = {
    entry,
    plugins,
    optimization,
    devtool: false,
    performance
  };

  export const WebpackProdConfig = merge<Partial<WebpackOptionsNormalized | Configuration>>(WebpackCommonConfig, webpackConfig);