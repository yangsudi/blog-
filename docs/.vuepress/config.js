module.exports = {
    title: '杨苏迪',
    description: 'This  is yangsudi\'blog',
    base: '/vuepress',
    port:　'8032',
    themeConfig: {
        nav: [
            { text: 'Tools', link: '/Tools/' },
            { text: 'javascript', link: '/javascript/' },
        ],
        lastUpdated: '最后一次更新', // string | boolean
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            // updatePopup: {
            //    message: "New content is available.",
            //    buttonText: "Refresh"
            // }
        },
        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        repo: 'https://github.com/yangsudi/vuepress',
        // 自定义项目仓库链接文字
        // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的 "Edit this page" 链接选项

        // 如果你的文档和项目位于不同仓库：
        docsRepo: 'vuepress',
        // 如果你的文档不在仓库的根目录下：
        docsDir: 'docs',
        // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
        docsBranch: 'master',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助我们改进页面内容！',
        sidebar: {
            '/MDN/': [
              '',
              'Regx'
            ],
            '/Tools/': [
              ''
            ],
            '/javascript/': [
                ''
            ]
        }
    }
}
