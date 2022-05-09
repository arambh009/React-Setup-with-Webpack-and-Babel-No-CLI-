const path=require('path');//its a core nodejs module to manipulate file paths

const HtmlWebpackPlugin=require('html-webpack-plugin');//creates our index.html file 

module.exports={
    entry:'./src/index.js',// our entry point, create index.js in source
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'index_bundle.js'
    }// all our imported components or say whole react structre goes into 'src' folder and after compilation goes to a file named 'index_bundle.js' in the 'dist' folder  
    ,
    module:{
        rules:[
            {
                test:/\.js$/,//loader looks for anything with .js
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',//well use babel loader
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
            // now create index.html in src folder
        })
    ]
}

