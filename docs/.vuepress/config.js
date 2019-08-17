module.exports = {
    title: "Software Wright",
    description: "Let's Learn Together",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['script', {
            src:
                "//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js",
            type: "text/javascript",
            ["data-dojo-config"]: "usePlainJson: true, isDebug: false"
        }],
        ['script', { type: 'text/javascript', src: '/js/mailchimp.js' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Learn', link: '/learn/' },
            { text: 'Contact', link: '/contact/' },
            { text: 'GitHub', link: 'https://github.com/softwarewright' },
            { text: 'Twitter', link: 'https://twitter.com/softwarewright' }
        ],
        logo: '/small-logo.png'
    },
    markdown: {
        lineNumbers: true
    },
    ga: 'UA-139419580-4',
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-139419580-4'
            },
            'vuepress-plugin-disqus'
        ]
    ],
    // 'disqus': { /* options */ }
}