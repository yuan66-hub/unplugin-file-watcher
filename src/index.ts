import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'

export interface Options {
    // define your plugin options here
    watchFiles: (any)[]

}

export const unpluginFactory: UnpluginFactory<Options | undefined> = options => ({
    name: 'unplugin-file-watcher',
    vite: {
        configureServer(server: any) {
            const { watchFiles } = options as Options
            server.watcher.on('change', (path: string) => {
                if (watchFiles.includes(path)) {
                    server.restart()
                }
            })
        }
    }
})

const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)
export default unplugin

export const vitePlugin = unplugin.vite
