
## 安装

```bash
npm add @yuanjianming/unplugin-file-watcher
```

## 使用

```js
import { defineConfig } from 'vite'
import { vitePlugin } from '@yuanjianming/unplugin-file-watcher'
export default defineConfig({
    //....
    plugins: [vitePlugin()],
})
```


## 选项

|  参数   | 类型  | 默认 | 描述 |
|  ----  | ----  | ---- | ---- |
| `watchFiles`  | `string[]` | `[]` | 监听文件的绝对路径

## 思考

1. webpack 如何添加文件，监听文件修改，重新启动
- nodemon (第三方工具监听)
- entry  多入口配置添加监听文件?
- 自定义热更新文件(xxx.hot.update.js/xxx.hot.update.json)


## 参考链接
- [webpack 热更新](https://webpack.docschina.org/configuration/output/#outputhotupdatechunkfilename)
- [webpack devServer](https://webpack.js.org/configuration/dev-server/#devserver)

