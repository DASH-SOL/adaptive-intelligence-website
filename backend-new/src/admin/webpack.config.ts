export default (config: any) => {
  const webpack = require('webpack');
  
  config.plugins.push(
    new webpack.DefinePlugin({
      ADMIN_PATH: JSON.stringify(process.env.ADMIN_PATH || '/admin'),
    })
  );
  
  return config;
};