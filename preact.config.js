import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

export default (config, env, helpers) => {
  config.plugins.push(
    new CopyWebpackPlugin(
      [{
        from: '*',
        to: 'data/',
        context: path.resolve(__dirname, 'src/data')
      }]
    ),
  );
}

