const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        entry: {
            app: './examples/main.js'
        },
        externals: {
            vue: {
                root: 'Vue',
                commonjs: 'vue',
                commonjs2: 'vue',
                amd: 'vue'
            }
        },
        // module: {
        //     rules: [{
        //         test: /\.js$/,
        //         loader: "babel-loader",
        //         include: [resolve('examples'), resolve('packages')]
        //     }]
        // }
    },
    // chainWebpack: (config) => {
    //     config.module.rule("compile")
    //         .test(/\.js$/)
    //         .include.add(resolve('examples'))
    //         .loader('babelLoader').use('babel-loader')
    // }
}