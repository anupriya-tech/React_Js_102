const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry:{
        main: path.resolve(__dirname,'./src/index.js'),
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].bundle.js',

    },    
    plugins: [
        new HtmlWebpackPlugin({
            title:'my webpack title',           
            
            inject: true,
            template:path.resolve(__dirname,'./src/template.html'), 
            filename:'index.html'
        }),

    ],
    devServer:{
        contentBase : path.join(__dirname,'dist'),
        compress: true,
        port: 8000,
    },
};
