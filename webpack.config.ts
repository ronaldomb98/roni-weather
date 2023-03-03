import { WebpackDevConfig, WebpackProdConfig, config } from './webpack';

export default config.isDev ? WebpackDevConfig : WebpackProdConfig;
