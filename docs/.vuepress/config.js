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
        sidebar: {
            '/blog/posts/learn-js-through-testing/': [
                '00-getting-started',
                '01-variables',
                '02-basic-arithmetic-operators',
                '03-basic-assignment-operators',
                '04-equality-operators'
            ]
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Learn', link: '/learn/' },
            { text: 'Contact', link: '/contact/' },
            // Move these links to the footer with icons
            // { text: 'GitHub', link: 'https://github.com/softwarewright' },
            // { text: 'Twitter', link: 'https://twitter.com/softwarewright' }
        ],
        logo: '/small-logo.png',

        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'softwarewright/softwarewright.github.io',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: '',

        // Optional options for generating "Edit this page" link

        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'vuepress',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Notice any issues? Help by contributing!'
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
    ]
}