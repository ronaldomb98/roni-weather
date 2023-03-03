import path from "path";

export const config = {
    port: 3000,
    hostName: '127.0.0.1',
    isDev: process.env.NODE_ENV === 'development',
    scripts: 'assets/js/[name].[contenthash].js',
    css: 'assets/css/[name].[contenthash].css',
    fonts: 'assets/fonts/[name][ext]',
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
    public: path.resolve(__dirname, '../public'),
}
