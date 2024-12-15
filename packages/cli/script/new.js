// 导入相关模块和库
import colors from 'colors'
import fs from 'fs-extra'
import path from 'path'

/// 定义创建新文件夹以及对应文件的逻辑
export const createNewFolder = (folderName) => {
  const targetFolderPath = path.join('packages', 'ui', 'components', folderName)
  // 创建文件夹
  fs.mkdirpSync(targetFolderPath)
  // 创建src文件夹
  const srcFolderPath = path.join(targetFolderPath, 'src')
  fs.mkdirpSync(srcFolderPath)
  // 创建type文件夹
  const typeFolderPath = path.join(targetFolderPath, 'type')
  fs.mkdirpSync(typeFolderPath)

  // 创建test文件夹
  const testFolderPath = path.join(targetFolderPath, 'test')
  fs.mkdirpSync(testFolderPath)

  // 创建style文件夹
  const styleFolderPath = path.join(targetFolderPath, 'style')
  fs.mkdirpSync(styleFolderPath)

  // 创建index.ts文件并写入内容
  const indexTsPath = path.join(targetFolderPath, 'index.ts')
  const indexTsContent = `import { withInstall } from '../../utils/withinstall';
        import ${folderName} from './src/index.vue';

        const Ver${folderName.charAt(0).toUpperCase()} = withInstall(${folderName});

        export default Ver${folderName.charAt(0).toUpperCase()};`
  fs.writeFileSync(indexTsPath, indexTsContent)

  // 在src文件夹下创建index.vue文件，并写入简单示例内容（这里可按需调整具体内容）
  const indexVuePath = path.join(srcFolderPath, 'index.vue')
  const indexVueContent = `
    <template>
        <div>${folderName}组件内容占位</div>
    </template>

    <script setup lang="ts"></script>`

  fs.writeFileSync(indexVuePath, indexVueContent)

  console.log(
    colors.green(`已成功创建名为${folderName}的文件夹及相关文件内容。`),
  )
}
