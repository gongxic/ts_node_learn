
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    version: '0.0.1',
    theme: {
        'font-family': 'Microsoft YaHei'
    },
    env: NODE_ENV,
    server: {
        // server
        port: 8886, // 生产环境运行端口号
        ininProt: 8885 // 初始化项目端口号
    }
}