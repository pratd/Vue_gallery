const{ VueLoaderPlugin } = require('vue-loader');
const HTMLWebpackPlugin  = require('html-webpack-plugin');
//require('infinite-scroll');
require('es6-promise').polyfill();
//const{ axiosPlugin } = require('vue-axios-plugin');
module.exports= {
    entry: './src/index.js',
    output:{
        path: __dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.(scss)$/,
                use:[
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        //interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader:'css-loader'
                    },
                    {
                        //loader for webpack to process css with postcss
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader:'sass-loader'
                    }
                    
                ]
            } 
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins:[
        new VueLoaderPlugin(),
        //new axiosPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
};