
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
| watchFiles  | string[] | [] | 监听文件的绝对路径