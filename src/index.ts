import { Plugin, normalizePath } from 'vite';
// import path from 'path';
const path = require('path')
// import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';

export function xxxx (pluginParams: any) {
    console.log(pluginParams)
    return {
        // 插件名称
        name: 'vite:xxxx',
        // 插件的执行顺序, 应该在设置完模版后执行，待定
        enforce: 'post',
        // 表示用于开发环境 还是 生产环境
        // apply: '',
        
        config(config) {
            // console.log('config', config);
        },
        buildStart (options) {
            // console.log('构建开始', options)
        },
        resolveId(id) {
            // console.log('请求响应', id)
        },
        // Vite 独有钩子, 用来记录最终的配置信息
        configResolved(config) {
            // console.log('configResolved', root, outDir, normalizePath(path.resolve(root, outDir)));
            // outRoot = normalizePath(path.resolve(root, outDir))
        },
        // 通用钩子
        options(opts) {
            // console.log('options', opts);
            return opts;
        },
        // Vite 独有钩子, 用来获取 Vite Dev Server 实例，添加中间件
        // configureServer(server) {
        //     console.log('configureServer');
        //     setTimeout(() => {
        //     // 手动退出进程
        //     process.kill(process.pid, 'SIGTERM');
        //     }, 3000)
        // },
        
        transformIndexHtml (html) {
            console.log('vite插件的html内容-post', typeof html)
            // console.log(readdirSync(outRoot))
            // https://github.com/posthtml/posthtml.org
        },
        load(id) {
            // console.log('loda==id', id)
            // 在钩子逻辑中可以通过闭包访问外部的 options 传参
        },
        transform (id) {
            // console.log('transform', id)
        }
      
    }
}