// {
//     context: __dirname + "/app",
//     entry: "./entry",
//     output: {
//         path: __dirname + "/dist",
//         filename: "bundle.js"
//     }
// }

var config = {

   //context: __dirname + "/src",
   entry: __dirname + "/main.js",
   output: {
      path: __dirname + './',
      filename: 'index.js',
   },
    devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
   
module.exports = config;
