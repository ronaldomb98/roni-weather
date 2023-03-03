import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { config } from './configuration';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { HotModuleReplacementPlugin, container, DefinePlugin } from 'webpack';
const { dependencies } = require('../package.json');

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
    inject: 'body',
    template: `${config.public}/index.html`,
    favicon: `${config.public}/favicon.png`,
});

export const cleanWebpackPlugin = new CleanWebpackPlugin();

export const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: config.css
});

export const terserWebpackPlugin = new TerserWebpackPlugin();

export const cssMinimizerWebpackPlugin = new CssMinimizerWebpackPlugin();

export const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();

export const nodePolyfillPlugin = new NodePolyfillPlugin();

export const envVariablesPlugin = new DefinePlugin({
    'process.env.NODE_ENV': config.isDev ? JSON.stringify(process.env.NODE_ENV) : JSON.stringify('production'),
    'process.env.GEOCODING': JSON.stringify(process.env.GEOCODING),
    'process.env.WEATHER': JSON.stringify(process.env.WEATHER),
});
