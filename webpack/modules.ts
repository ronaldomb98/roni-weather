import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { config } from './configuration';

export const scripts: RuleSetRule = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
};

export const fonts: RuleSetRule = {
    test: /\.(woff|woff2)$/,
    type: 'asset/resource',
    generator: {
        filename: config.fonts
    }
};

export const svg: RuleSetRule = {
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    options: {
        esModule: true
    }
};

export const styles: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
        config.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[path][name]__[local]'
                },
                importLoaders: 2
            }
        },
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                      [
                        "autoprefixer",
                        {
                            grid: 'autoplace'
                        },
                      ]
                    ],
                  },
            }
        },
        {
            loader: 'sass-loader',
            options: {
                additionalData: `
                                @use "sass:map";
                                @use "sass:selector";
                                @import "generic.scss";
                            `,
                sassOptions: {
                    includePaths: [config.src, `${config.src}/assets/styles`]
                }
            }
        }
    ],
}
