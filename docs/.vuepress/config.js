module.exports = {
    title: '前端知识图谱',
    description: 'frontend knowledge graph',
    themeConfig: {
        nav: [
          { text: '综述', link: '/' },
          { text: '目录', link: '/javascript/base' },
          { text: 'Github', link: 'https://github.com/liangxin199045/knowledge-graph.git' },
        ],
        sidebar: [
            {
                title: 'Javascript',   // 必要的
                path: '/javascript/index',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  {
                    title: 'ES6',
                    path: '/javascript/base'
                  },
                  {
                    title: '原型',
                    path: '/javascript/prototype'
                  }
                ]
            },
            {
                title: 'Css',
                path: '/css/index',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                      title: 'css',
                      path: '/css/base'
                    },
                    {
                      title: 'sass',
                      path: '/css/sass'
                    }
                ]
            }
        ]
    }
}