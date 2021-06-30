import * as path from 'path';
import { Configuration } from "webpack";

export const config: Configuration = {
  mode: 'development',
  entry: {
    common: './src/components/index.ts',
  },
  output: {
    filename: 'components.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.ts$/i,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: "tsconfig.web.json",
          },
        },
        exclude: /node_modules/,

      },
      {
        test: /.html$/i,
        use: 'html-loader',
      },
      {
        test: /.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')],
              }
            }
          }
        ]
      }],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};

export default config