## fis-parser-tses6

fis-plus项目js、ES6文件ES6转换ES5

### 配置使用
```js
fis.config.merge({
    modules: {
        parser: {
            js: 'tses6',
            es6: 'tses6'
        }
    },
    roadmap: {
        ext: {
            js: 'js',
            es6: 'js'
        }
    },
    settings : {
        parser : {
            'tses6' : {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }
    }
});
```