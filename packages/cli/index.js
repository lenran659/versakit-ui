#!/usr/bin/env node

// 导入 commander 包用于构建命令行界面
import { Command } from 'commander'
import { createNewFolder } from '../cli/script/new'

// 定义主函数，在命令行执行脚本时会运行这个函数
function main() {
  const program = new Command()
  // 定义 --help 命令对应的帮助信息
  program.name('v').description('Versakit命令行工具').version('0.2.0')

  // 定义创建新文件夹对应的命令
  program
    .command('new')
    .description('创建一个新文件夹')
    .argument('<folderName>', '要创建的文件夹名称') // 明确指定需要接收的参数以及其描述
    .action((folderName) => {
      createNewFolder(folderName)
    })
    .addHelpText('after', '\n注意：文件夹名称只能包含字母、数字和下划线。')

  program.parse(process.argv)
}

// 判断是否是直接运行该脚本，如果是则执行主函数
main()
