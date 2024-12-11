import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'index.js', // 这里替换为你实际的入口文件，比如上述代码保存为index.js，那这里就是'index.js'
  output: {
    // 打包后的输出文件，可以根据需求调整文件名和路径，比如'dist/bundle.js'等
    file: './bin/index.cjs',
    format: 'cjs', // 因为是Node.js环境下运行，常用'cjs'（CommonJS格式），也可以根据具体情况选择'esm'（ES模块格式）等
    sourcemap: true, // 是否生成sourcemap文件，方便调试，可按需开启或关闭
  },
  plugins: [
    resolve(), // 用于解析模块路径，能找到node_modules里的第三方模块
    commonjs(), // 处理导入的CommonJS模块，使其能被Rollup正确打包
  ],
}
